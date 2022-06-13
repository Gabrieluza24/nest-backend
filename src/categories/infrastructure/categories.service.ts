import { Injectable } from "@nestjs/common";
import { CategoriesDTO } from "../domain/categories.dto";
import { CategoriesEntity } from "./categories.entity";
import { CategoriesMapper } from "./categories.mapper";
import { CategoriesRepository } from "../application/categories.repository";

@Injectable()
export class CategoriesService {

    constructor(
        private categoriesRepository: CategoriesRepository,
        private mapper: CategoriesMapper
        ){}

        async getAllCategories(): Promise<CategoriesDTO[]> {
            const categories: CategoriesEntity[] = await this.categoriesRepository.GetAllCategories()
            return categories.map(categories => this.mapper.entityToDto(categories));
        }
    
        async getCategoryById(id: number): Promise<CategoriesDTO> {
            const category: CategoriesEntity = await this.categoriesRepository.GetCategoryById(id);
            return this.mapper.entityToDto(category);
        }
    
        async CreateCategory(CategoryDTO: CategoriesDTO): Promise<CategoriesDTO> {
            const category: CategoriesEntity = await this.categoriesRepository.CreateCategory(CategoryDTO);
            return this.mapper.entityToDto(category);
            
        }
      
        async UpdateCategory(CategoryDTO: CategoriesDTO): Promise<CategoriesDTO> {
            const category = await this.categoriesRepository.UpdateCategory(CategoryDTO);
            return this.mapper.entityToDto(category);
        }
    
        async DeleteCategory(id: number): Promise<void> {
            await this.categoriesRepository.DeleteCategory(id);
        }
}