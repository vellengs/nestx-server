import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload, Token } from './interfaces/jwt-payload.interface';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/Register.dto';
// import { User, UsersService } from './../user';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) { }

  async createToken(payload: LoginDto): Promise<Token> {
    const accessToken = this.jwtService.sign({ email: payload.username });
    return {
      expiresIn: 3600,
      accessToken,
    };
  }

  async register(payload: RegisterDto): Promise<any> {
    return payload; // TODO
  }

  async findOneByToken() {

  }

  async validateUser(payload: JwtPayload): Promise<any> {

    // const user = await this.userService.getByEmail(payload.email);
    // if (!user) {
    //   throw new UnauthorizedException('Wrong login combination!');
    // }

    // if (!user.validate(payload.password)) {
    //   throw new UnauthorizedException('Wrong login combination!');
    // }
    // return user;

    return {};
  }
}
