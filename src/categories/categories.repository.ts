import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CategoriesEntity } from "./categories.entiy";
import { CategoriesMapper } from "./categories.mapper";

@Injectable()
export class CategoriesRepository {

    constructor(
        @InjectRepository(CategoriesEntity)
        private usersRepository: Repository<CategoriesEntity>,
        private mapper: CategoriesMapper
    ) { }

}