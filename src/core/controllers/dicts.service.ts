import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongooseService, Criteria } from './../mongoose.service';
import { Dict } from './../interfaces/dict.interface';
import { ResultList } from './../../common/interfaces/result.interface';

@Injectable()
export class DictsService extends MongooseService<Dict> {

  defaultQueryFields = ['name', 'translate', 'expand'];
  constructor(@InjectModel('Dict') protected readonly model: Model<Dict>) {
    super(model);
  }

}
