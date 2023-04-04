import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/infrastructure/users.entity';
import { rootCertificates } from 'tls';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { CategoriesEntity } from './categories/infrastructure/categories.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'database',
      port: 3306,
      username: 'root',
      password: 'pass',
      database: 'db-pt',
      entities: [UserEntity,CategoriesEntity],
      synchronize: true,
      // type: 'mysql',
      // host: process.env.DB_HOST,
      // port: parseInt(process.env.DB_PORT),
      // username: process.env.DB_USER,
      // password: process.env.DB_PASS,
      // database: process.env.DB_NAME,
      // entities: [UserEntity],
      // synchronize: !!process.env.DB_SYNC
    }),
    UsersModule,
    AuthModule,
    CategoriesModule],
  providers: [AppService],
})
export class AppModule { }
