import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsEmail, Matches, Validate, MinLength, MaxLength, } from 'class-validator';

export class AuthDto {
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @ApiProperty()
    @IsDefined()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(16)
    @Matches(/^[A-z0-9*/+\-$%&]*$/)
    readonly password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}
