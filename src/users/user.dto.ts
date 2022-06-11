import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsEmail, Matches, } from 'class-validator';


export class UserDTO {
    readonly id?: string;

    @ApiProperty()
    @IsEmail()
    readonly email: string;

    @ApiProperty()
    @IsDefined()
    @IsNotEmpty()
    @Matches(/^[A-z0-9*/+\-$%&]{8,16}$/)
    readonly password: string;

    constructor(id: string, email: string, password: string) {
        this.id = id;
        this.email = email;
        this.password = password;
    }
}