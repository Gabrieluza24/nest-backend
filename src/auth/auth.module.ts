import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './infrastructure/controllers/auth.controller';
import { AuthService } from './application/use-cases/auth.service';

@Module({
    imports: [UsersModule, PassportModule],
    controllers:[AuthController],
    providers: [AuthService],
})
export class AuthModule {}
