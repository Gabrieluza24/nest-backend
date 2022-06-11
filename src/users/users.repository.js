"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.UsersRepository = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var users_entity_1 = require("./users.entity");
var UsersRepository = /** @class */ (function () {
    function UsersRepository(usersRepository, mapper) {
        this.usersRepository = usersRepository;
        this.mapper = mapper;
    }
    UsersRepository.prototype.getAllUsers = function () {
        return this.usersRepository.find();
    };
    UsersRepository.prototype.CreateUser = function (userDTO) {
        var newUser = this.mapper.dtoToEntity(userDTO);
        return this.usersRepository.save(newUser);
    };
    UsersRepository = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.UserEntity))
    ], UsersRepository);
    return UsersRepository;
}());
exports.UsersRepository = UsersRepository;
