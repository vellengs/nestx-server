import {
  SettingSchema,
  DictSchema,
  LogSchema,
  MenuSchema,
  RoleSchema,
  UserSchema,
  GroupSchema
} from './../core/schemas';
import { model } from 'mongoose';
import { Dict, Log, Menu, Role, Setting, User, Group } from './../core/interfaces';
export const CoreDatabase = {
  Dict: model<Dict & Document>('Dict', DictSchema),
  Log: model<Log & Document>('Log', LogSchema),
  Menu: model<Menu & Document>('Menu', MenuSchema),
  Role: model<Role & Document>('Role', RoleSchema),
  User: model<User & Document>('User', UserSchema),
  Setting: model<Setting & Document>('Setting', SettingSchema),
  Group: model<Group & Document>('Group', GroupSchema)
};
