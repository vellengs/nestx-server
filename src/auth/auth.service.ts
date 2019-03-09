import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload, Token } from './interfaces/jwt-payload.interface';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/Register.dto';
import { UsersService } from './../core/users.service';

@Injectable()
export class AuthService {

  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) { }

  async login(payload: LoginDto): Promise<Token> {
    const user = await this.userService.login(payload.username, payload.password);
    if (user) {
      return await this.createToken(user);
    } else {
      throw new UnauthorizedException();
    }
  }

  async createToken(payload: LoginDto): Promise<Token> {
    const accessToken = this.jwtService.sign({ email: payload.username });
    return {
      expiresIn: 3600,
      accessToken,
    };
  }

  async register(payload: RegisterDto): Promise<Token> {
    const user = await this.userService.create(payload);
    return await this.createToken(user);
  }

  async validateUser(payload: JwtPayload) {
    return this.userService.findOne({
      username: payload.account
    })
  }
}
