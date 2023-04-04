import { Injectable } from '@nestjs/common';
import { UserDTO } from '../dtos/user.dto';
import { UserEntity } from '../../domain/entities/users.entity';
import { UserMapper } from '../../infrastructure/mappers/users.mapper';
import { UsersRepository } from '../../infrastructure/repositories/users.repository';
import { UserResponseDto } from '../dtos/user-response.dto';

@Injectable()
export class UsersService {

    constructor(
        private usersRepository: UsersRepository,
        private mapper: UserMapper
        ){}

    async getAllUsers(): Promise<UserResponseDto[]> {
        const users: UserEntity[] = await this.usersRepository.getAllUsers()
        return users.map(user => new UserResponseDto(user.id, user.email, user.createDate));
    }

    async CreateUser(userDTO: UserDTO): Promise<UserDTO> {
        const newUser: UserEntity = await this.mapper.dtoToEntity(userDTO);
        await this.usersRepository.create(newUser);
        return this.mapper.entityToDto(newUser);
    }

    async getUser(email: string): Promise<UserDTO> {
        const user: UserEntity = await this.usersRepository.getUser(email);
        if(user != null){
            return this.mapper.entityToDto(user);
        }
        else return user
    }
}
