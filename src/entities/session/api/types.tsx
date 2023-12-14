export type SessionDto = {
  accessToken: string
  user: {
    email: string
    id: string
  }
}

export type RequestLoginBody = {
  email: string
  password: string
}

export type UserDto = {
  id: string
  email: string
}
