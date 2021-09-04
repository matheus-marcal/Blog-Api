import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './users.entity';
import { UserDto } from './users.model';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  private readonly users = [];

  createUser = async (newUser: UserDto) => {
    try {
      const createResponse = await this.userRepository.save(newUser);
      return createResponse;
    } catch (error) {
      throw error;
    }
  };

  async finduserbyEmail(useremail: string): Promise<User | undefined> {
    try {
      const founduser = await this.userRepository.findOne({
        where: {
          email: useremail,
        },
      });
      if (!founduser) throw new HttpException('Usuario não encontrado', 404);
      return founduser;
    } catch (error) {
      throw error;
    }
  }

  GetbyIdUser = async (userid: string) => {
    try {
      const foundartigo = await this.userRepository.findOne({
        where: {
          id: userid,
        },
      });
      if (!foundartigo) {
        throw new HttpException('Artigo não encontrado', 404);
      }
      return foundartigo;
    } catch (error) {
      throw error;
    }
  };
}
