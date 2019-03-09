import { Document } from 'mongoose';

export interface User extends Document {
  username: string;
  password: string;
  comparePassword: (password: string, cb: any) => void;
}
