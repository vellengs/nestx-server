// import * as mongoose from 'mongoose';

// import { Schema, SchemaTypes as t, SchemaOptions } from 'mongoose';
// const option: SchemaOptions = {};
// option.timestamps = true;

// export const schema = new mongoose.Schema({
//     username: t.String,
//     password: t.String,
//     avatar: t.String,
//     email: t.String,
//     nick: t.String,
//     type: t.String,
//     mobile: t.String,
//     roles: [{
//         type: t.ObjectId, ref: 'Role'
//     }],
//     isDisable: {
//         type: t.Boolean
//     },
//     isAdmin: {
//         type: t.Boolean
//     },
//     isApproved: {
//         type: t.Boolean
//     },
//     expired: {
//         type: t.Boolean
//     },
// }, option);


import * as mongoose from 'mongoose';

export const schema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
});

