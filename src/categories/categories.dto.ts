import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, MaxLength, MinLength } from "class-validator";

export class CategoriesDTO {

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    readonly id?: number;
    
    @ApiProperty()
    @MinLength(2)
    @MaxLength(10)
    readonly code: string;

    @ApiProperty()
    @MinLength(2)
    @MaxLength(10)
    readonly title: string;

    @ApiProperty()
    @MinLength(10)
    @MaxLength(500)
    readonly description: string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    readonly idParentCategory?: number;

    readonly createDate?: Date;

    readonly updateDate?: Date;

    readonly softDelete?: Date;

    constructor(
        id: number,
        code: string,
        title: string,
        description: string,
        idParentCategory: number,
        createDate: Date,
        updateDate: Date,
    ) {
        this.id = id;
        this.code = code;
        this.title = title;
        this.description = description;
        this.idParentCategory = idParentCategory;
        this.createDate = createDate;
        this.updateDate = updateDate;
    }
}