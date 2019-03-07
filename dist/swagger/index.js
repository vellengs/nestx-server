"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const constants_1 = require("./constants");
exports.setupSwagger = (app) => {
    const options = new swagger_1.DocumentBuilder()
        .setTitle(constants_1.SWAGGER_API_NAME)
        .setDescription(constants_1.SWAGGER_API_DESCRIPTION)
        .setVersion(constants_1.SWAGGER_API_CURRENT_VERSION)
        .addBearerAuth(constants_1.SWAGGER_API_AUTH_NAME, constants_1.SWAGGER_API_AUTH_LOCATION)
        .setSchemes('https')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup(constants_1.SWAGGER_API_ROOT, app, document);
};
//# sourceMappingURL=index.js.map