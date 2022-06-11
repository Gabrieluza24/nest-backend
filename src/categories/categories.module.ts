import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from './categories.controller';
import { CategoriesEntity } from './categories.entiy';
import { CategoriesMapper } from './categories.mapper';
import { CategoriesRepository } from './categories.repository';
import { CategoriesService } from './categories.service';

@Module({
    imports: [TypeOrmModule.forFeature([CategoriesEntity])],

    controllers: [CategoriesController],

    providers: [
        CategoriesService,
        CategoriesMapper,
        CategoriesRepository
    ],

})
export class CategoriesModule { }
