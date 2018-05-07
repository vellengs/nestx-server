import * as mongoose from 'mongoose';
import { connect } from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async (): Promise<typeof mongoose> =>
            await connect('mongodb://localhost/typerx'),
    },
];
