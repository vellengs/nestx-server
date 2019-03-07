"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const cms_module_1 = require("./cms/cms.module");
const events_gateway_1 = require("./events.gateway");
const core_module_1 = require("./core/core.module");
const app_module_1 = require("./app.module");
let ApplicationModule = class ApplicationModule {
};
ApplicationModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forRoot(), app_module_1.AppModule, auth_module_1.AuthModule, core_module_1.CoreModule, cms_module_1.CmsModule],
        providers: [events_gateway_1.EventsGateway,]
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=server.module.js.map