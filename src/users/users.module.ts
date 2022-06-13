import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from './presentation/users.controller';
import { UserEntity } from './infrastructure/users.entity';
import { UserMapper } from './infrastructure/users.mapper';
import { UsersRepository } from './application/users.repository';
import { UsersService } from './infrastructure/users.service';

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
