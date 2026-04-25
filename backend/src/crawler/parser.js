const axios = require('axios');
const cheerio = require('cheerio');

const BASE_URL = 'https://ce.dongguk.ac.kr';

const CRAWL_TARGETS = [
  {
    name: '학과공지',
    url: `${BASE_URL}/HOME/computer/sub.htm?nav_code=com1587521150`
  },
  {
    name: '채용공고',
    url: `${BASE_URL}/HOME/computer/sub.htm?nav_code=com1587521149`
  }
];

const HTTP_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
  'Referer': `${BASE_URL}/`,
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'Accept-Language': 'ko-KR,ko;q=0.9',
  'Cache-Control': 'no-cache'
};

// URL의 mv_data(base64) 파라미터에서 idx(list_no) 추출
const extractListNo = (href) => {
  const match = href.match(/mv_data=([^&"]+)/);
  if (!match) return null;
  try {
    const decoded = Buffer.from(match[1], 'base64').toString('utf8');
    const idxMatch = decoded.match(/idx=(\d+)/);
    return idxMatch ? parseInt(idxMatch[1]) : null;
  } catch {
    return null;
  }
};

// 상세 페이지에서 본문 텍스트 추출
const fetchContent = async (url) => {
  try {
    const res = await axios.get(url, { timeout: 10000, headers: HTTP_HEADERS });
    const $ = cheerio.load(res.data);
    const content = $('.board_view .cont').text().replace(/\s+/g, ' ').trim();
    return content.substring(0, 1000);
  } catch {
    return '';
  }
};

const parseNotices = async (target) => {
  try {
    const response = await axios.get(target.url, {
      timeout: 10000,
      headers: HTTP_HEADERS
    });

    const $ = cheerio.load(response.data);
    const notices = [];

    $('table tbody tr').each((index, element) => {
      try {
        const titleEl = $(element).find('td.subject a');
        const title = titleEl.text().trim();
        if (!title) return;

        const href = titleEl.attr('href') || '';
        const source_url = href.startsWith('http')
          ? href
          : BASE_URL + (href.startsWith('/') ? href : '/' + href);

        const list_no = extractListNo(href);
        if (!list_no) return;

        const noticeSpan = $(element).find('td.notice span').text().trim();
        const is_pinned = noticeSpan === '공지';

        const author = $(element).find('td.writer').text().trim() || '미상';
        const dateText = $(element).find('td.date').text().trim();
        const created_at = dateText ? new Date(dateText) : new Date();
        const hitText = $(element).find('td.hit').text().trim().replace(/,/g, '');
        const view_count = parseInt(hitText) || 0;

        notices.push({ list_no, title, author, created_at, view_count, source_url, is_pinned });
      } catch {
        // 개별 항목 파싱 오류 무시
      }
    });

    // 각 공지의 상세 페이지에서 본문 수집
    const now = new Date();
    const result = [];
    for (const notice of notices) {
      const content = await fetchContent(notice.source_url);
      result.push({
        ...notice,
        content,
        crawled_at: now,
        updated_at: now
      });
    }

    return result;
  } catch (err) {
    console.error(`${target.name} HTML 요청 오류:`, err.message);
    return [];
  }
};

module.exports = { parseNotices, CRAWL_TARGETS };
