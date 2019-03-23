import { Document } from 'mongoose';

export interface Dict extends Document {
  _id: string;
}
