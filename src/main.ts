import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './server.module';
import { ValidationPipe } from '@nestjs/common';
import { setupSwagger } from './swagger';
import * as compression from 'compression';
import * as csurf from 'csurf';
import * as rateLimit from 'express-rate-limit';


// import * as fs from 'fs';
async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule,
    // {
    //   httpsOptions: {
    //     key: fs.readFileSync('ssl_private_key.pem'),
    //     cert: fs.readFileSync('ssl_certificate.crt'),
    //   },
    // }
  );
  app.use(csurf());
  app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  }));
  app.setGlobalPrefix('api');
  setupSwagger(app);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.use(compression());
  await app.listen(3600);
}
bootstrap();
