import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGODB_URI } from './secret';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from 'nestx-auth';
import { BaseModule } from 'nestx-base';
import { UsersService } from 'nestx-base';

// import {  } from 'nestx-base';
import { defaultMeta } from 'nestx-auth/dist/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(MONGODB_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
    }),
    BaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
