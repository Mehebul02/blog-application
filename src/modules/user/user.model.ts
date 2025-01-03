/* eslint-disable @typescript-eslint/no-this-alias */
import bcrypt from 'bcrypt';
import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import config from "../../config";


const userSchema = new Schema<TUser>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        enum: ['admin', "user"],
        trim: true,
        default: 'user',
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true,
},)

userSchema.pre('save', async function (next) {
    const user = this;
    user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_rounds));
    next();
})


userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
})



export const User = model<TUser>('User', userSchema)