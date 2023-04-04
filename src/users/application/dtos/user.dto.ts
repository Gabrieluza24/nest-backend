import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsEmail, Matches, } from 'class-validator';

export class UserDTO {
    readonly id?: string;

    @ApiProperty()
    @IsEmail()
    readonly email: string;

    @ApiProperty()
    @IsNotEmpty()
    @Matches(/^[A-z0-9*/+\-$%&]*$/)
    readonly password?: string;

    readonly createDate?: Date;
    
    constructor(id: string, email: string, password: string, createDate:Date) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.createDate = createDate
    }
}