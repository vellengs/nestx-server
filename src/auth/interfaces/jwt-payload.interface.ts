export interface JwtPayload {
  email: string;
}

export interface Token {
  expiresIn: number;
  accessToken: string;
}
