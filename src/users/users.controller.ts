import {
  Controller,
  Post,
  Body,
  HttpException,
  Get,
  Param,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
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
  @Get(':id')
  async GetbyIdArtigo(@Param('id') userid: string) {
    try {
      const response = await this.userService.GetbyIdUser(userid);
      return response;
    } catch (err) {
      if (err instanceof HttpException) throw err;
      throw new HttpException(err.message, 400);
    }
  }
}
