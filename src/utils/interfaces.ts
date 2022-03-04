export interface IUserInfos {
  username: string,
  classe: string,
  level: number,
  password: string
}

export interface IUserPayload {
  id: number,
  username: string
}

export interface IUserLogin {
  username: string,
  password: string
}
