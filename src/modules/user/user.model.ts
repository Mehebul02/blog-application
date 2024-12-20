
import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";


const userSchema = new Schema<TUser>({
    name: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    password: {
        type: String,
        required: true,
        trim:true
    },
    role: {
        type: String,
        enum: ['admin', "user"],
        required: true,
        trim:true
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true,
},)


export const USer = model<TUser>('User', userSchema)