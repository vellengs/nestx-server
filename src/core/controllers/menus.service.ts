import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongooseService } from './../mongoose.service';
import { Menu } from './../interfaces/menu.interface';

@Injectable()
export class MenusService extends MongooseService<Menu> {

  constructor(@InjectModel('Menu') protected readonly model: Model<Menu>) {
    super(model);
  }

}
