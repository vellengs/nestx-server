import { Connection } from 'mongoose';
import { schema as UserSchema } from './schemas/user.schema';
import { schema as RoleSchema } from './schemas/role.schema';
import { schema as MenuSchema } from './schemas/menu.schema';
import { schema as LogSchema } from './schemas/log.schema';
import { schema as DictSchema } from './schemas/dict.schema';
import { schema as SettingSchema } from './schemas/setting.schema';


export const coreProviders = [
  {
    provide: 'UserModelToken',
    useFactory: (connection: Connection) => connection.model('User', UserSchema),
    inject: ['DbConnectionToken'],
  },
  {
    provide: 'RoleModelToken',
    useFactory: (connection: Connection) => connection.model('Role', RoleSchema),
    inject: ['DbConnectionToken'],
  },
  {
    provide: 'LogModelToken',
    useFactory: (connection: Connection) => connection.model('Log', LogSchema),
    inject: ['DbConnectionToken'],
  },
  {
    provide: 'MenuModelToken',
    useFactory: (connection: Connection) => connection.model('Menu', MenuSchema),
    inject: ['DbConnectionToken'],
  },
  {
    provide: 'DictModelToken',
    useFactory: (connection: Connection) => connection.model('Dict', DictSchema),
    inject: ['DbConnectionToken'],
  },
  {
    provide: 'SettingModelToken',
    useFactory: (connection: Connection) => connection.model('Setting', SettingSchema),
    inject: ['DbConnectionToken'],
  }
];
