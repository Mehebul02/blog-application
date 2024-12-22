import { TUser } from "./user.interface"
import { User } from "./user.model"

const createUserIntoDB = async (payload: TUser): Promise<TUser> => {
    // const userData: Partial<TUser> = { ...payload };
    // userData.role = 'admin'
    // console.log("Admin role face",payload);
    payload.role = 'admin'
    const result = await User.create(payload)
    return result
}


const getAllUsersFromDB = async (query: Record<string, unknown>) => {
    const result = await User.find(query)
    return result
}



export const UserServices = {
    createUserIntoDB,
    getAllUsersFromDB
}