import { TUser } from "./user.interface"
import { USer } from "./user.model"

const createUser = async (payload: TUser) => {
    const result = await USer.create(payload)
    return result
}

export const UserServices = {
    createUser
}