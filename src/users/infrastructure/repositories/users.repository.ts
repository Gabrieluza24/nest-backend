import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../domain/entities/users.entity';
import { UserMapper } from '../mappers/users.mapper';
import { UserRepositoryInterface } from 'src/users/domain/interfaces/users-repository.interface';

@Injectable()
export class UsersRepository implements UserRepositoryInterface {

    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
        private mapper: UserMapper
    ) { }

    async create(user: UserEntity): Promise<void> {
        await this.usersRepository.save(user);
    }

    getAllUsers(): Promise<UserEntity[]> {
        return this.usersRepository.find();
    }

    getUser(email: string): Promise<UserEntity> {
        return this.usersRepository.findOneBy({ email: email })
    }

}
