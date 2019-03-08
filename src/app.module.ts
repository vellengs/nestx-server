import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { CommerceModule } from './commerce/commerce.module';
import { CmsModule } from './cms/cms.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
    CoreModule,
    CmsModule,
    CommerceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }