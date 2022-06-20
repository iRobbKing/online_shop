type UserRole = 'admin' | 'user' | 'guest'

interface User {
  login: string
  role: UserRole
}

interface UserRegistration {
  login: string
  password: string
}
