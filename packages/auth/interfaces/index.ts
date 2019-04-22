import { Result } from "nestx-common";
import { RegisterReq } from "../dto";

export interface JwtPayload {
  account: string;
}

export interface AccessToken {
  expiresIn: number;
  accessToken: string;
}

export interface IUserService {
  verifyCode: (code: string, mobile: string) => Promise<boolean>;
  register: (payload: RegisterReq) => Promise<{ username: string }>;
  sendVeryCode: (mobile: string) => Promise<Result>;
  findOne: (conditions?: { [key: string]: any }) => Promise<any>;
  login: (username: string, password: string) => Promise<any>;
}
