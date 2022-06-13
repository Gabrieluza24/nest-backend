import { Injectable } from "@nestjs/common";
import { UserDTO } from "../domain/user.dto";
import { UserEntity } from "./users.entity";

@Injectable()
export class UserMapper {

    dtoToEntity(userDTO: UserDTO): UserEntity {
        return new UserEntity(userDTO.email, userDTO.password);
    }

    entityToDto(userEntity: UserEntity): UserDTO {
        return new UserDTO(userEntity.id, userEntity.email, userEntity.password, userEntity.createDate);
    }

}

