import { Body, Controller, Get, HttpException, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDTO } from '../../application/dtos/user.dto';
import { UsersService } from '../../application/use-cases/users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get('/')
    public async getUsers(): Promise<UserDTO[]> {
        try {
            const users = await this.usersService.getAllUsers();
            return users;
        } catch (error) {
            throw new HttpException(error.message, error.status);
        }
    }

    @Post('/')
    public async CreateUser(@Body() userDto: UserDTO,): Promise<UserDTO> {
        try {
            const user = await this.usersService.CreateUser(userDto);
            const { password, ...result } = user;
            return result;
        } catch (error) {
            throw new HttpException(error.message, error.status);
        }
    }
}