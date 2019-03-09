import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { UserSchema } from './schemas/user.schema';
import { DictSchema } from './schemas/dict.schema';
import { LogsSchema } from './schemas/log.schema';
import { MenusSchema } from './schemas/menu.schema';
import { RoleSchema } from './schemas/role.schema';
import { SettingSchema } from './schemas/setting.schema';

const models = [
  { name: 'Dict', schema: DictSchema },
  { name: 'Log', schema: LogsSchema },
  { name: 'Menu', schema: MenusSchema },
  { name: 'Role', schema: RoleSchema },
  { name: 'Setting', schema: SettingSchema },
  { name: 'User', schema: UserSchema },
];

@Module({
  imports: [
    MongooseModule.forFeature(models),
    PassportModule.register({ defaultStrategy: 'jwt', session: false })
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class CoreModule { }
