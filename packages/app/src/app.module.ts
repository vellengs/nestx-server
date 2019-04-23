import { Module } from '@nestjs/common';
import { BaseModule } from 'nestx-base';
import { MongooseModule } from '@nestjs/mongoose';
import { cm} from 'nestx-cms';
const mongodbUri = 'mongodb://localhost/nestx-server-test';

@Module({
  imports: [
    MongooseModule.forRoot(mongodbUri, {
      useCreateIndex: true,
      useNewUrlParser: true,
    }),
    BaseModule,
    
  ],
})
export class AppModule {}
