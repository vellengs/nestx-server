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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const common_1 = require("@nestjs/common");
const users_service_1 = require("../core/users.service");
const crypto_service_1 = require("../core/crypto/crypto.service");
const auth_constants_1 = require("./auth.constants");
let AuthService = class AuthService {
    constructor(jwtOptions, cryptoService, usersService) {
        this.jwtOptions = jwtOptions;
        this.cryptoService = cryptoService;
        this.usersService = usersService;
    }
    createToken(loginUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, username } = yield this.validateLoginUserDto(loginUserDto);
            const { expiresIn, secret } = this.jwtOptions;
            const token = jwt.sign({ id, username }, secret, {
                expiresIn,
            });
            return {
                expires_in: expiresIn,
                access_token: token,
            };
        });
    }
    validateLoginUserDto(loginUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { password, username } = loginUserDto;
            const user = yield this.usersService.findOne({ username });
            const isValid = yield this.cryptoService.compare(password, user.password);
            if (!isValid) {
                throw new common_1.UnauthorizedException();
            }
            return user;
        });
    }
    validateUserPayload(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, id } = payload;
            try {
                const user = yield this.usersService.findOne({ id });
                return user.username === username ? user : null;
            }
            catch (_a) {
                return null;
            }
        });
    }
    validateToken(token) {
        try {
            return jwt.verify(token, this.jwtOptions.secret);
        }
        catch (_a) {
            return null;
        }
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(auth_constants_1.JWT_OPTIONS)),
    __metadata("design:paramtypes", [Object, crypto_service_1.CryptoService,
        users_service_1.UsersService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map