
import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";


const userSchema = new Schema<TUser>({
    name: {
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