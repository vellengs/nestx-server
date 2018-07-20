import * as mongoose from 'mongoose';
export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> => {
      const mongoose = require('mongoose');  // hack for jest test missing mongoose.
      return await mongoose.connect('mongodb://localhost:27017/nest', { useNewUrlParser: true });
    }
  },
];