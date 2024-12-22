import { TUser } from "./user.interface"
import { USer } from "./user.model"

const createUserIntoDB = async (payload: TUser):Promise<TUser> => {
    const userData: Partial<TUser> = {...payload};
    userData.role ='admin'
    // console.log("Admin role face",payload);
    const result = await USer.create(userData)
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