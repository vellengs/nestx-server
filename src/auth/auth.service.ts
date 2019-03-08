import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload, Token } from './interfaces/jwt-payload.interface';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/Register.dto';
import { UsersService } from './../core/users.service';
import { User } from './../core/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) { }

  async createToken(payload: LoginDto): Promise<Token> {
    const accessToken = this.jwtService.sign({ email: payload.username });
    return {
      expiresIn: 3600,
      accessToken,
    };
  }

  async register(payload: RegisterDto): Promise<User> {
    return this.userService.create(payload);
  }

  async findOneByToken(account: string): Promise<User> {
    return this.userService.findOne({ account: account });

  }

  async validateUser(payload: JwtPayload): Promise<User> {
    return this.userService.findOne({
      username: payload.account
    })
  }
}
