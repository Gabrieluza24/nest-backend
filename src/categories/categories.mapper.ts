import { Injectable } from "@nestjs/common";
import { CategoriesDTO } from "./categories.dto";
import { CategoriesEntity } from "./categories.entiy";

@Injectable()
export class CategoriesMapper {

    dtoToEntity(CategoriesDTO: CategoriesDTO): CategoriesEntity {
        return new CategoriesEntity(
            CategoriesDTO.code,
            CategoriesDTO.title,
            CategoriesDTO.description,
            CategoriesDTO.idParentCategory,
            CategoriesDTO.softDelete
        );
    }

    entityToDto(CategoriesEntity: CategoriesEntity): CategoriesDTO {
        return new CategoriesDTO(
            CategoriesEntity.id,
            CategoriesEntity.code,
            CategoriesEntity.title,
            CategoriesEntity.description,
            CategoriesEntity.idParentCategory,
            CategoriesEntity.createDate,
            CategoriesEntity.updateDate,
            CategoriesEntity.softDelete
        );
    }

}

