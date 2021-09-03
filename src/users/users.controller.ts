import { Controller, Post, Body, HttpException } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async CreateUser(@Body() newUser) {
    try {
      const response = await this.userService.createUser(newUser);
      return response;
    } catch (err) {
      if (err instanceof HttpException) throw err;
      throw new HttpException(err.message, 400);
    }
  }
}
