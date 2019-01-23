import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CmsModule } from './cms/cms.module';
import { EventsGateway } from './events.gateway';
import { CoreModule } from './core/core.module';
import { AppModule } from './app.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AppModule, AuthModule, CoreModule, CmsModule],
  providers: [EventsGateway,]
})
export class ApplicationModule { }
