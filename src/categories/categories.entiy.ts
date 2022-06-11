import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcryptjs';

@Entity('categories')
export class CategoriesEntity {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    readonly code: string;

    @Column()
    readonly title: string;

    @Column()
    readonly description: string;

    @Column()
    readonly idParentCategory: number;

    @CreateDateColumn({ type: "timestamp" })
    readonly createDate: Date;

    @CreateDateColumn({ type: "timestamp" })
    readonly updateDate: Date;

    @Column()
    readonly softDelete: Date;

    constructor(
        code: string,
        title: string,
        description: string,
        idParentCategory: number,
        softDelete: Date
    ) {
        this.code = code;
        this.title = title;
        this.description = description;
        this.idParentCategory = idParentCategory;
        this.softDelete = softDelete;
    }

}
