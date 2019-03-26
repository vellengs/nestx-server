"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const mongoose_service_1 = require("./../mongoose.service");
let DictsService = class DictsService extends mongoose_service_1.MongooseService {
    constructor(model) {
        super(model);
        this.model = model;
        this.defaultQueryFields = ['name', 'translate', 'expand'];
    }
};
DictsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Dict')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], DictsService);
exports.DictsService = DictsService;
//# sourceMappingURL=dicts.service.js.map