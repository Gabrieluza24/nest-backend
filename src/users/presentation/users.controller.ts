import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDTO } from '../domain/user.dto';
import { UsersService } from '../infrastructure/users.service';

@ApiTags('Users')
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
        
        const { password, ...result } = user;
        return result;
    }

}