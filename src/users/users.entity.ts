import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn()
    readonly id: string;

    @Column({
        unique: true
    })
    readonly email: string;

    @Column()
    readonly password: string;

    @CreateDateColumn({type: "timestamp"})
    readonly createdAt: Date;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}