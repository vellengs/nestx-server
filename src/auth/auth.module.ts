
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { authProviders } from './auth.providers';
import { CryptoModule } from '../core/crypto/crypto.module';
import { AuthService } from './auth.service';
import { CoreModule } from '../core/core.module';

@Module({
  imports: [CryptoModule, CoreModule],
  providers: [JwtStrategy, AuthService, ...authProviders],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule { }
