import { Body, Controller, Post, UseGuards, } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from '../application/auth.service';
import { AuthDto } from '../domain/auth.dto';

@ApiTags('Auth')
@Controller('Auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(@Body() AuthDto: AuthDto) {
        return this.authService.validateUser(AuthDto.email, AuthDto.password);
    }
}