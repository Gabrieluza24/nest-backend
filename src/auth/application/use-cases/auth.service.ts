import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/application/use-cases/users.service';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, pass: string) {
    const user = await this.usersService.getUser(email); 

    if (!user) {
      throw new UnauthorizedException('Usuario no Registrado');
    }

    if (!(await bcrypt.compare(pass, user.password))) {
      throw new UnauthorizedException('Contraseña Incorrecta');
    }

    const { password, ...result } = user;
    return result;
  }

}
