"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_constants_1 = require("./auth.constants");
exports.authProviders = [
    {
        provide: auth_constants_1.JWT_OPTIONS,
        useValue: {
            expiresIn: 86400,
            secret: 'nestx-secret',
        },
    },
];
//# sourceMappingURL=auth.providers.js.map