"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dicts_controller_1 = require("./dicts.controller");
const users_controller_1 = require("./users.controller");
const dicts_service_1 = require("./dicts.service");
const users_service_1 = require("./users.service");
const menus_controller_1 = require("./menus.controller");
const menus_service_1 = require("./menus.service");
const logs_service_1 = require("./logs.service");
const logs_controller_1 = require("./logs.controller");
exports.CoreControllers = [
    dicts_controller_1.DictsController,
    users_controller_1.UsersController,
    menus_controller_1.MenusController,
    logs_controller_1.LogsController,
];
exports.CoreServices = [
    dicts_service_1.DictsService,
    users_service_1.UsersService,
    menus_service_1.MenusService,
    logs_service_1.LogsService,
];
//# sourceMappingURL=index.js.map