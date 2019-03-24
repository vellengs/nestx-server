import { Model, Document, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { ObjectID } from 'typeorm';
import { ResultList } from './../common/interfaces/result.interface';

export interface Id {
  _id: string | number | Date | ObjectID;
}

export interface Criteria {
  [key: string]: any;
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

  async query(index: number = 1, size: number = 10, query: any = {}): Promise<ResultList<T>> {
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

  async search(
    keyword?: string, id?: string,
    category = '', limit: number = 10, labelField = 'name', valueField = '_id', searchField = 'name'
  ): Promise<any[]> {

    const criteria: Criteria = {};
    criteria[searchField] = new RegExp(keyword, 'i');
    const query = keyword ? criteria : {};

    if (category) {
      query.category = category;
    }

    const fields: Criteria = {};
    fields[labelField] = 1;
    fields[valueField] = 1;

    const docs = await this.model.find(query).select(fields)
      .limit(limit)
      .exec() || [];

    if (id && (Types.ObjectId.isValid(id) || valueField !== '_id')) {
      const conditions: Criteria = {};
      conditions[valueField] = id;
      const selected = await this.model.findOne(conditions).select(fields);
      if (selected) {
        const found = docs.findIndex((doc: Criteria) => doc[valueField] == id);
        if (found === -1) {
          docs.push(selected);
        }
      }
    }

    return docs.map((item: Criteria) => {
      const result = {
        label: item[labelField],
        value: item[valueField]
      };
      return result;
    });
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
