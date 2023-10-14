import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { UserDTO } from '../dto/user.dto';
import { UserService } from '../service/user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new user' })
  async createUser(@Body() userDTO: UserDTO) {
    return this.userService.createUser(userDTO);
  }
}
