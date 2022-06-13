import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CategoriesDTO } from "../domain/categories.dto";
import { CategoriesService } from "../infrastructure/categories.service";

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
    constructor(private CategoriesService: CategoriesService) { }

    @Get()
    async getAllCategories(): Promise<CategoriesDTO[]> {
        return await this.CategoriesService.getAllCategories();
    }

    @Get(':id')
    async getCategoryById(@Param('id') id: number): Promise<CategoriesDTO> {
        return await this.CategoriesService.getCategoryById(id);
    }

    @Post()
    async createCategory(@Body() CategoryDTO: CategoriesDTO): Promise<CategoriesDTO> {
        console.log("🚀 ~ file: categories.controller.ts ~ line 23 ~ CategoriesController ~ createCategory ~ CategoryDTO", CategoryDTO)
        return await this.CategoriesService.CreateCategory(CategoryDTO);
    }

    @Put()
    async updateCategory(@Body() categoryDTO: CategoriesDTO): Promise<CategoriesDTO> {
        return await this.CategoriesService.UpdateCategory(categoryDTO);
    }

    @Delete(':id')
    async deleteCategory(@Param('id') id: number): Promise<void> {
        return await this.CategoriesService.DeleteCategory(id);
    }


}