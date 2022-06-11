import { Body, Controller, Post, UseGuards, } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('Auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    //@UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Body() AuthDto: AuthDto) {
        return this.authService.validateUser(AuthDto.email, AuthDto.password);
    }
}