import { Body, Controller, Post } from '@nestjs/common';
import { CreatUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {
  @Post()
  async creatUser(@Body() creatUser: CreatUserDto) {
    return {
      ...creatUser,
      password: undefined,
    };
  }
}

// @Get()
//   async getAllUsers() {
//     return JSON.stringify({ test: 'abc' });
//   }
