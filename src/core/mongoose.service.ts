import { Model, Document } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { ObjectID } from 'typeorm';
import { ResultList } from './../common/interfaces/result.interface';

export interface Id {
  _id: string | number | Date | ObjectID;
}

@Injectable()
export class MongooseService<T extends Document & Id>  {
  constructor(
    protected model: Model<T>
  ) { }

  async create(entry: any): Promise<T> {
    const instance = new this.model(entry);
    return await instance.save();
  }

  async update(entry: any): Promise<T> {
    const instance = new this.model(entry);
    return await instance.save();
  }

  async findAll(index: number = 1, size: number = 10, query: any = {}): Promise<ResultList<T>> {
    return new Promise<ResultList<T>>(async (resolve) => {
      let result: ResultList<T> = {
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

  async search(keyword?: string, value?: string, limit: number = 10): Promise<any[]> {
    // return Repository.search(Db.Account, keyword, value, '', limit, 'name', '_id', 'keyword');
    return [];
  }

  async findOne(conditions?: any): Promise<T> {
    return await this.model.findOne(conditions).exec();
  }

  async findById(id: string | number | ObjectID): Promise<T> {
    return await this.model.findById(id).exec();
  }

  async remove(id: string | number | ObjectID): Promise<any> {
    let entity = await this.model.findById(id);
    return await this.model.remove(entity);
  }

}
