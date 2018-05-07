"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./schemas/user.schema");
const role_schema_1 = require("./schemas/role.schema");
const menu_schema_1 = require("./schemas/menu.schema");
const log_schema_1 = require("./schemas/log.schema");
const dict_schema_1 = require("./schemas/dict.schema");
const setting_schema_1 = require("./schemas/setting.schema");
exports.coreProviders = [
    {
        provide: 'UserModelToken',
        useFactory: (connection) => connection.model('User', user_schema_1.schema),
        inject: ['DbConnectionToken'],
    },
    {
        provide: 'RoleModelToken',
        useFactory: (connection) => connection.model('Role', role_schema_1.schema),
        inject: ['DbConnectionToken'],
    },
    {
        provide: 'LogModelToken',
        useFactory: (connection) => connection.model('Log', log_schema_1.schema),
        inject: ['DbConnectionToken'],
    },
    {
        provide: 'MenuModelToken',
        useFactory: (connection) => connection.model('Menu', menu_schema_1.schema),
        inject: ['DbConnectionToken'],
    },
    {
        provide: 'DictModelToken',
        useFactory: (connection) => connection.model('Dict', dict_schema_1.schema),
        inject: ['DbConnectionToken'],
    },
    {
        provide: 'SettingModelToken',
        useFactory: (connection) => connection.model('Setting', setting_schema_1.schema),
        inject: ['DbConnectionToken'],
    }
];
//# sourceMappingURL=core.providers.js.map