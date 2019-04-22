import { NestFactory } from '@nestjs/core';
import { AppModule } from './../src/app.module';
import { createDocument } from './../src/swagger';
import { writeFileSync } from 'fs';

async function generate() {
  const app = await NestFactory.create(AppModule);
  const document = createDocument(app);
  writeFileSync('swagger.api.json', JSON.stringify(document));
}

generate();
