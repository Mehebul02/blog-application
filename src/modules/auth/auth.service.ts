import httpStatus from "http-status";
import AppError from "../../app/errors/appError";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { ILoginUser } from "./auth.interface";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const registerUser = async (payload: TUser) => {
    const result = await User.create(payload)
    return result
}


const loginUSer = async (payload: ILoginUser) => {
    const user = await User.findOne({ email: payload?.email })
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found')
    }


    const isPasswordMatch = await bcrypt.compare(payload.password, user.password)
    if (!isPasswordMatch) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid password')
    }

    // jwt.sign({ email: user.email, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' }, (err, token) => {
    //     if (err) {
    //         throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'Error while generating token')
    //     }
    // })



    const token = jwt.sign({ email: user.email, role: user.role }, 'secrete', { expiresIn: '1d' })

    return { token, user }
}

export const AuthServices = {
    registerUser,
    loginUSer
}