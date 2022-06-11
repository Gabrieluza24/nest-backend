import { Injectable } from "@nestjs/common";
import { UserDTO } from "./user.dto";
import { UserEntity } from "./users.entity";

@Injectable()
export class UserMapper {

    dtoToEntity(userDTO: UserDTO): UserEntity {
        const a = new UserEntity(userDTO.email, userDTO.password);
        console.log("🚀 ~ file: users.mapper.ts ~ line 10 ~ UserMapper ~ dtoToEntity ~ a", a)
        return a
    }

    entityToDto(userEntity: UserEntity): UserDTO {
        return new UserDTO(userEntity.id, userEntity.email, userEntity.password, userEntity.createdAt);
    }

}

