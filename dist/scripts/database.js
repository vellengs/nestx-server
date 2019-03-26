"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schemas_1 = require("./../core/schemas");
const mongoose_1 = require("mongoose");
exports.CoreDatabase = {
    Dict: mongoose_1.model('Dict', schemas_1.DictSchema),
    Log: mongoose_1.model('Log', schemas_1.LogSchema),
    Menu: mongoose_1.model('Menu', schemas_1.MenuSchema),
    Role: mongoose_1.model('Role', schemas_1.RoleSchema),
    User: mongoose_1.model('User', schemas_1.UserSchema),
    Setting: mongoose_1.model('Setting', schemas_1.SettingSchema),
    Group: mongoose_1.model('Group', schemas_1.GroupSchema)
};
//# sourceMappingURL=database.js.map