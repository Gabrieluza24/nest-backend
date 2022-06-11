import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, MaxLength, MinLength } from "class-validator";

export class CategoriesDTO {

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
    readonly idParentCategory: number;

    @IsDate()
    readonly createDate?: Date;

    @IsDate()
    readonly updateDate?: Date;

    @IsDate()
    readonly softDelete?: Date;

    constructor(
        id: number,
        code: string,
        title: string,
        description: string,
        idParentCategory: number,
        createDate: Date,
        updateDate: Date,
        softDelete: Date
    ) {
        this.id = id;
        this.code = code;
        this.title = title;
        this.description = description;
        this.idParentCategory = idParentCategory;
        this.createDate = createDate;
        this.updateDate = updateDate;
        this.softDelete = softDelete;
    }
}