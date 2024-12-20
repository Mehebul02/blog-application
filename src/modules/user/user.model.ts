import { IUser } from './user.interface';
import { model, Schema } from "mongoose";


const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', "user"],
        required: true
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true,
},)


export const USer = model<IUser>('User', userSchema)