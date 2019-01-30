import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './server.module';
import { ValidationPipe } from '@nestjs/common';
import * as fs from 'fs';
import { setupSwagger } from './swagger';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule,
    {
      httpsOptions: {
        key: fs.readFileSync('ssl_private_key.pem'),
        cert: fs.readFileSync('ssl_certificate.crt'),
      },
    }
  );
  app.setGlobalPrefix('api');
  setupSwagger(app);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.use(compression());
  await app.listen(3600);
}
bootstrap();
