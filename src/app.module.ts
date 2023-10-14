import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './config/typeorm.config';
import { UserService } from './user/service/user.service';
import { UserController } from './user/controller/user.controller';
import { User } from './user/entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController, AppController],
  providers: [UserService, AppService],
})
export class AppModule {}
