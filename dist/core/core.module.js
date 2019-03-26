"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const passport_1 = require("@nestjs/passport");
const user_schema_1 = require("./schemas/user.schema");
const dict_schema_1 = require("./schemas/dict.schema");
const log_schema_1 = require("./schemas/log.schema");
const menu_schema_1 = require("./schemas/menu.schema");
const role_schema_1 = require("./schemas/role.schema");
const setting_schema_1 = require("./schemas/setting.schema");
const controllers_1 = require("./controllers");
const models = [
    { name: 'Dict', schema: dict_schema_1.DictSchema },
    { name: 'Log', schema: log_schema_1.LogSchema },
    { name: 'Menu', schema: menu_schema_1.MenuSchema },
    { name: 'Role', schema: role_schema_1.RoleSchema },
    { name: 'Setting', schema: setting_schema_1.SettingSchema },
    { name: 'User', schema: user_schema_1.UserSchema },
];
let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature(models),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt', session: false })
        ],
        controllers: [...controllers_1.CoreControllers],
        providers: [...controllers_1.CoreServices],
        exports: [...controllers_1.CoreServices]
    })
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map