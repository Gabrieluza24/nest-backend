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
    readonly createdAt: Date;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(): Promise<void> {
        const salt = await bcrypt.genSalt();
        if (!/^\$2a\$\d+\$/.test(this.password)) {
            this.password = await bcrypt.hash(this.password, salt);
        }
    }

    async checkPassword(plainPassword: string): Promise<boolean> {
        return await bcrypt.compare(plainPassword, this.password);
    }
}
