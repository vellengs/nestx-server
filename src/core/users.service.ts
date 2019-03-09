import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { EditUserDto } from './dto/edit-user.dto';
import { ObjectID } from 'typeorm';
import { ResultList } from './../common/interfaces/result.interface';

@Injectable()
export class UsersService {
  constructor(@Inject('UserModelToken') private readonly model: Model<User>) { }

  async login(account: string, password: string): Promise<User | false> {
    const instance = await this.model.findOne({ username: account });
    if (instance) {
      return new Promise<User | false>((resolve, reject) => {
        instance.comparePassword(password, (err: Error, isMatch: boolean) => {
          if (err) { return reject(err); }
          if (isMatch) {
            resolve(instance);
          }
          resolve(false);
        });
      });
    }
    return false;
  }

  async create(createCatDto: CreateUserDto): Promise<User> {
    const instance = new this.model(createCatDto);
    return await instance.save();
  }

  async update(editUser: EditUserDto): Promise<User> {
    const instance = new this.model(editUser);
    return await instance.save();
  }

  async findAll(index: number = 1, size: number = 10, query: any = {}): Promise<ResultList<User>> {
    return new Promise<ResultList<User>>(async (resolve) => {
      let result: ResultList<User> = {
        list: await this.model.find({ skip: size * (index - 1), take: size }),
        count: await this.model.count(query),
        query: {
          index: index,
          size: size
        }
      }
      resolve(result);
    })
  }

  async findOne(conditions?: any): Promise<User> {
    return await this.model.findOne(conditions).exec();
  }

  async remove(id: string | number | ObjectID): Promise<any> {
    let entity = await this.model.findOne(id);
    return await this.model.remove(entity);
  }

}
