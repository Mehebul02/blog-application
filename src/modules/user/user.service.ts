import { TUser } from "./user.interface"
import { USer } from "./user.model"

const createUserIntoDB = async (payload: TUser) => {
    const result = await USer.create(payload)
    return result
}


const getAllUsersFromDB = async (query: Record<string, unknown>) => {
    const result = await USer.find(query)
    return result
}



export const UserServices = {
    createUserIntoDB,
    getAllUsersFromDB
}