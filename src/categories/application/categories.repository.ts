import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { throwError } from "rxjs";
import { DeleteResult, Repository } from "typeorm";
import { CategoriesDTO } from "../domain/categories.dto";
import { CategoriesEntity } from "../infrastructure/categories.entity";
import { CategoriesMapper } from "../infrastructure/categories.mapper";

@Injectable()
export class CategoriesRepository {

    constructor(
        @InjectRepository(CategoriesEntity)
        private categoriesRepository: Repository<CategoriesEntity>,
        private mapper: CategoriesMapper
    ) { }

    GetAllCategories(): Promise<CategoriesEntity[]> {
        return this.categoriesRepository.find();
    }

    GetCategoryById(id: number): Promise<CategoriesEntity> {
        return this.categoriesRepository.findOneBy({ id: id })
    }

    CreateCategory(CategoriesDTO: CategoriesDTO): Promise<CategoriesEntity> {
        const category = this.mapper.dtoToEntity(CategoriesDTO);
        return this.categoriesRepository.save(category);
    }

    async UpdateCategory(CategoriesDTO: CategoriesDTO): Promise<CategoriesEntity> {
        const id = CategoriesDTO.id;
        const category = this.mapper.dtoToEntity(CategoriesDTO);

        await this.categoriesRepository.update(id, category)
        return this.categoriesRepository.findOneBy({ id: id })
    }

    DeleteCategory(id: number): Promise<DeleteResult> {
        const category = this.categoriesRepository.findOneBy({ id: id });
        if (!category) {
            throw new BadRequestException('This category does not exist');
        }
        else
            return this.categoriesRepository.softDelete(id);
    }

}