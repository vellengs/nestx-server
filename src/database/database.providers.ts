import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> => {
      const mongoose = require('mongoose');
      console.log('mongoose ...');
      return await mongoose.connect('mongodb://localhost/nest');
    }
  },
];