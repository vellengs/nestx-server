import { Module } from '@nestjs/common';
import { BaseModule } from 'nestx-base';
import { CmsModule } from 'nestx-cms';
import { MongooseModule } from '@nestjs/mongoose';

const mongodbUri = 'mongodb://localhost/nestx-server-test';

@Module({
  imports: [
    MongooseModule.forRoot(mongodbUri, {
      useCreateIndex: true,
      useNewUrlParser: true,
    }),
    BaseModule,
    CmsModule,
  ],
})
export class AppModule {}
