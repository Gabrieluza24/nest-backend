import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDTO } from './user.dto';
import { UserEntity } from './users.entity';
import { UserMapper } from './users.mapper';

@Injectable()
export class UsersRepository {

    constructor(
        @InjectRepository(UserEntity) 
              private usersRepository: Repository<UserEntity>,
        private mapper: UserMapper){}

    getAllUsers(): Promise<UserEntity[]> {
        return this.usersRepository.find();
    }

    CreateUser(userDTO: UserDTO): Promise<UserEntity> {
        const newUser = this.mapper.dtoToEntity(userDTO);
        return this.usersRepository.save(newUser);
    }

    getUser(email:string): Promise<UserEntity>{
        return this.usersRepository.findOneBy({email:email})
    }

}
