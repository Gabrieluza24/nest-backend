import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from './infrastructure/controllers/users.controller';
import { UserEntity } from './domain/entities/users.entity';
import { UserMapper } from './infrastructure/mappers/users.mapper';
import { UsersRepository } from './infrastructure/repositories/users.repository';
import { UsersService } from './application/use-cases/users.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UsersController],
    providers:
        [
            UsersService,
            UserMapper,
            UsersRepository
        ],
    exports: [UsersService],

})
export class UsersModule { }
