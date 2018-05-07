"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_schema_1 = require("./schemas/category.schema");
exports.CoreProviders = [
    {
        provide: 'CmsModelToken',
        useFactory: (connection) => {
            connection.model('Category', category_schema_1.schema);
        },
        inject: ['DbConnectionToken'],
    },
];
//# sourceMappingURL=cms.provider.js.map