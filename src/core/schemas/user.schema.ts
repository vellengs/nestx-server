import { Schema, Error, SchemaTypes as t } from 'mongoose';
import * as bcrypt from 'bcrypt';

export const UserSchema = new Schema({
    username: { type: t.String, unique: true, required: true },
    password: t.String,
    avatar: t.String,
    email: t.String,
    name: t.String,
    about: t.String,
    location: {
        country: t.String,
        province: t.String,
        district: t.String,
        address: t.String,
    },
    type: t.String,
    mobile: t.String,
    roles: [{
        type: t.ObjectId, ref: 'Role'
    }],
    isDisable: {
        type: t.Boolean
    },
    isAdmin: {
        type: t.Boolean
    },
    isApproved: {
        type: t.Boolean
    },
    expired: {
        type: t.Boolean
    },
}, {
        timestamps: true,
        usePushEach: true,
    });

function preSave(next: Function) {
    const user = this;
    if (!user.isModified('password')) { return next(); }
    bcrypt.genSalt(10, (err: any, salt: any) => {
        if (err) { return next(err); }
        bcrypt.hash(user.password, salt, (err: Error, hash: string) => {
            if (err) { return next(err); }
            user.password = hash;
            next();
        });
    });
}

function preUpdate(next: Function) {
    const updateDoc = this.getUpdate();
    const rawPassword = (updateDoc.$set || updateDoc).password;
    if (rawPassword) {
        const password = bcrypt.hashSync(rawPassword, bcrypt.genSaltSync(10));
        this.findOneAndUpdate({}, { password: password });
    }
    next();
}

UserSchema.pre('save', preSave);
UserSchema.pre('findOneAndUpdate', preUpdate);
UserSchema.methods.comparePassword = function (candidatePassword: string, cb: (err: any, isMatch: any) => {}) {
    bcrypt.compare(candidatePassword, this.password, (err: Error, isMatch: boolean) => {
        if (cb) {
            cb(err, isMatch);
        }
    });
};

UserSchema.methods.pure = function () {
    const obj = this.toJSON();
    delete obj.password;
    return obj;
}