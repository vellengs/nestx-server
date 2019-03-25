import { Document } from 'mongoose';

export interface Dict extends Document {
  _id: string;
  name: string;
  category: string;
  translate: string;
  expand: any;
}
