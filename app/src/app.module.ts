import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoreModule } from './core';
import { CommerceModule } from './commerce';
import { CmsModule } from './cms';
import { MONGODB_URI } from './utils';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AuthModule} from 'nestx-auth';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    MongooseModule.forRoot(MONGODB_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
    }),
    AuthModule,
    CoreModule,
    CmsModule,
    CommerceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
