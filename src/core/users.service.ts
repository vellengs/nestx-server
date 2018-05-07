import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@Inject('UserModelToken') private readonly model: Model<User>) { }

  async create(createCatDto: CreateUserDto): Promise<User> {
    const instance = new this.model(createCatDto);
    return await instance.save();
  }

  async findAll(): Promise<User[]> {
    return await this.model.find().exec();
  }
}
