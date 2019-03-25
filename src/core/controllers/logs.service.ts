import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongooseService } from './../mongoose.service';
import { Log } from './../interfaces/log.interface';

@Injectable()
export class LogsService extends MongooseService<Log> {

  constructor(@InjectModel('Log') protected readonly model: Model<Log>) {
    super(model);
  }

}
