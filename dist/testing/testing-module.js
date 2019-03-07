"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const optional = require('optional');
const core_1 = require("@nestjs/core");
const express_factory_1 = require("@nestjs/core/adapters/express-factory");
const express_adapter_1 = require("@nestjs/core/adapters/express-adapter");
const { NestMicroservice } = optional('@nestjs/microservices/nest-microservice') || {};
class TestingModule extends core_1.NestApplicationContext {
    constructor(container, scope, contextModule, applicationConfig) {
        super(container, scope, contextModule);
        this.applicationConfig = applicationConfig;
    }
    createNestApplication(httpServer = express_factory_1.ExpressFactory.create(), options) {
        httpServer = this.applyExpressAdapter(httpServer);
        this.container.setApplicationRef(httpServer);
        return new core_1.NestApplication(this.container, httpServer, this.applicationConfig);
    }
    createNestMicroservice(options) {
        return new NestMicroservice(this.container, options, this.applicationConfig);
    }
    applyExpressAdapter(httpAdapter) {
        const isAdapter = !!httpAdapter.getHttpServer;
        if (isAdapter) {
            return httpAdapter;
        }
        return new express_adapter_1.ExpressAdapter(httpAdapter);
    }
}
exports.TestingModule = TestingModule;
//# sourceMappingURL=testing-module.js.map