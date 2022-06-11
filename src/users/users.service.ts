import { Injectable } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UserEntity } from './users.entity';
import { UserMapper } from './users.mapper';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {

    constructor(
        private usersRepository: UsersRepository,
        private mapper: UserMapper
        ){}

    async getAllUsers(): Promise<UserDTO[]> {
        const users: UserEntity[] = await this.usersRepository.getAllUsers()
        return users.map(user => this.mapper.entityToDto(user));
    }

    async CreateUser(userDTO: UserDTO): Promise<UserDTO> {
        const newUser: UserEntity = await this.usersRepository.CreateUser(userDTO);
        return this.mapper.entityToDto(newUser);
    }
}
