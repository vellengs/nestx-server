"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const option = {};
option.timestamps = true;
exports.RoleSchema = new mongoose_1.Schema({
    name: { type: mongoose_1.SchemaTypes.String },
    description: { type: mongoose_1.SchemaTypes.String },
    permissions: [{ type: mongoose_1.SchemaTypes.ObjectId, ref: 'Menu' }],
}, option);
//# sourceMappingURL=role.schema.js.map