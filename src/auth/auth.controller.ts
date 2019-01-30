import { Controller, Get, UseGuards, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Token } from './interfaces/jwt-payload.interface';
import { ApiResponse } from '@nestjs/swagger';
import { LoginDto } from './dto/Login.dto';
import { RegisterDto } from './dto/Register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  @ApiResponse({ status: 201, description: 'Successful Login' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async login(@Body() payload: LoginDto): Promise<Token> {
    const user = await this.authService.validateUser({ email: payload.username });
    return await this.authService.createToken(user);
  }

  @Post('register')
  @ApiResponse({ status: 201, description: 'Successful Registration' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async register(@Body() payload: RegisterDto): Promise<Token> {
    const user = await this.authService.register(payload);
    return await this.authService.createToken(user);
  }
}
