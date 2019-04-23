import { IUserService } from "interfaces";
import { Result } from "nestx-common";
import { RegisterReq } from "./dto/Register.dto";

export class MockUserService implements IUserService {
  async verifyCode(code: string, mobile: string): Promise<boolean> {
    return true;
  }

  async register(payload: RegisterReq) {
    return { username: "string" };
  }

  async sendVeryCode(mobile: string): Promise<Result> {
    return {
      ok: true
    };
  }

  async findOne(conditions?: { [key: string]: any }) {
    return true;
  }

  async login() {
    return {
      username: "hi"
    };
  }
  
}
