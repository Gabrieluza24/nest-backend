import { Injectable } from "@nestjs/common";
import { CategoriesMapper } from "./categories.mapper";
import { CategoriesRepository } from "./categories.repository";

@Injectable()
export class CategoriesService {

    constructor(
        private categoriesRepository: CategoriesRepository,
        private mapper: CategoriesMapper
        ){}
}