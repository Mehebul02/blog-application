import { TUser } from "../user/user.interface";
import { USer } from "../user/user.model";


const registerUser = async (payload: TUser) => {
    const result = await USer.create(payload)
    return result
}

export const AuthServices = {
    registerUser
}