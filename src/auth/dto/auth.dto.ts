import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsEmail, Matches, Validate, } from 'class-validator';

export class AuthDto {
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @ApiProperty()
    @IsDefined()
    @IsNotEmpty()
    @Matches(/^[A-z0-9*/+\-$%&]{8,16}$/)
    readonly password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}
