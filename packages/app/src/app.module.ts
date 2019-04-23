import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGODB_URI } from './secret';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseModule, UsersService } from 'nestx-base';
import { AuthModule } from 'nestx-auth';
@Module({
  imports: [
    MongooseModule.forRoot(MONGODB_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
    }),
    AuthModule.registerAsync({
      imports: [BaseModule],
      providers: [
        {
          provide: 'IUserService',
          useClass: UsersService,
        },
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
