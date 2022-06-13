import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from './presentation/categories.controller';
import { CategoriesEntity } from './infrastructure/categories.entity';
import { CategoriesMapper } from './infrastructure/categories.mapper';
import { CategoriesRepository } from './application/categories.repository';
import { CategoriesService } from './infrastructure/categories.service';

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
