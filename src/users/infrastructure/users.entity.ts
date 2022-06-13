import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcryptjs';


@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn()
    readonly id: string;

    @Column({
        unique: true
    })
    readonly email: string;

    @Column()
    password: string;

    @CreateDateColumn({ type: "timestamp" })
    readonly createDate: Date;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(): Promise<void> {
        const saltOrRounds = 10;
        this.password = await bcrypt.hash(this.password, saltOrRounds);
    }
}
