"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const option = {};
option.timestamps = true;
exports.MenuSchema = new mongoose_1.Schema({
    name: { type: mongoose_1.SchemaTypes.String },
    slug: { type: mongoose_1.SchemaTypes.String },
    group: { type: mongoose_1.SchemaTypes.Boolean },
    link: { type: mongoose_1.SchemaTypes.String },
    externalLink: { type: mongoose_1.SchemaTypes.String },
    blank: { type: mongoose_1.SchemaTypes.Boolean },
    icon: { type: mongoose_1.SchemaTypes.String },
    order: { type: mongoose_1.SchemaTypes.Number, default: 100 },
    enable: { type: mongoose_1.SchemaTypes.Boolean },
    expanded: { type: mongoose_1.SchemaTypes.Boolean },
    acl: { type: mongoose_1.SchemaTypes.String },
    paths: [{
            type: mongoose_1.SchemaTypes.ObjectId,
            ref: 'Menu'
        }],
    parent: {
        type: mongoose_1.SchemaTypes.ObjectId,
        ref: 'Menu'
    },
    permissions: [
        {
            type: mongoose_1.SchemaTypes.ObjectId,
            ref: 'Menu'
        }
    ],
    isMenu: {
        type: mongoose_1.SchemaTypes.Boolean,
        default: true
    }
}, option);
//# sourceMappingURL=menu.schema.js.map