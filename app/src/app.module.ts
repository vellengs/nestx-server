import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGODB_URI } from './secret';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from 'nestx-auth';
import { BaseModule } from 'nestx-base';
@Module({
  imports: [
    MongooseModule.forRoot(MONGODB_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
    }),
    AuthModule,
    BaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
