"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const option = {};
option.timestamps = true;
exports.schema = new mongoose_1.Schema({
    name: {
        type: mongoose_1.SchemaTypes.String
    },
    operator: {
        type: mongoose_1.SchemaTypes.String
    },
    operatorIp: {
        type: mongoose_1.SchemaTypes.String
    },
    operation: {
        type: mongoose_1.SchemaTypes.String
    },
    comment: {
        type: mongoose_1.SchemaTypes.String
    }
}, option);
//# sourceMappingURL=setting.schema.js.map