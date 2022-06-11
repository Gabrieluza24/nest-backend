import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private UsersService: UsersService) { }

    @Get()
    public async getAllUsers(): Promise<UserDTO[]> {
        const users = await this.UsersService.getAllUsers();
        return users;
    }

    @Post()
    public async CreateUser(
        @Body() userDto: UserDTO,
    ): Promise<UserDTO> {
        const user = await this.UsersService.CreateUser(userDto);
        return user;
    }

}