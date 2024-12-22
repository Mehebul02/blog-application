import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";


const registerUser = async (payload: TUser) => {
    const result = await User.create(payload)
    return result
}


const loginUSer = async () => {
    const result = await User.findOne()
}

export const AuthServices = {
    registerUser,
    loginUSer
}