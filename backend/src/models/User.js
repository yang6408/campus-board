// TODO: mongoose, bcryptjs import

// TODO: User 스키마 정의
// - username: String, required, unique
// - email: String, required, unique
// - password: String, required (bcrypt 해시 저장)
// - 필요한 필드 추가 (학번, 학과 등)
// - timestamps: true

// TODO: save 전 비밀번호 bcrypt 해싱 (pre hook)

// TODO: 비밀번호 비교 메서드 구현 (comparePassword)

// TODO: mongoose.model('User', userSchema) export
