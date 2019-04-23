import { Module } from '@nestjs/common';
import { AuthModule } from 'nestx-auth';
import { MockUserService } from 'nestx-auth/dist/mock.user.service';
@Module({
  imports: [
    AuthModule.registerAsync({
      providers: [
        {
          provide: 'IUserService',
          useClass: MockUserService,
        },
      ],
    }),
  ],
})
export class AppModule {}
