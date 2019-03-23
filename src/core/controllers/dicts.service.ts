import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongooseService } from './../mongoose.service';
import { Dict } from './../interfaces/dict.interface';

@Injectable()
export class DictsService extends MongooseService<Dict> {

  constructor(@InjectModel('Dict') protected readonly model: Model<Dict>) {
    super(model);
  }

}
