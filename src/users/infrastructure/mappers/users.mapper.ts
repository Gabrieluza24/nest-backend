import { Injectable } from "@nestjs/common";
import { UserDTO } from "../../application/dtos/user.dto";
import { UserEntity } from "../../domain/entities/users.entity";

@Injectable()
export class UserMapper {

    dtoToEntity(userDTO: UserDTO): UserEntity {
        return new UserEntity(userDTO.email, userDTO.password);
    }

    entityToDto(userEntity: UserEntity): UserDTO {
        return new UserDTO(userEntity.id, userEntity.email, userEntity.password, userEntity.createDate);
    }

}

