import { Request, Response } from "express";
import { UserServices } from "./user.service";


const createUserIntoDB = async (req: Request, res: Response) => {
    try {
        const payload = req.body
        const result = await UserServices.createUserIntoDB(payload)
        res.json({
            success: true,
            message: "User created successfully",
            data: result
        })

    } catch (err) {
        res.json({
            success: false,
            message: "Validation failed",
            error: err
        })

    }
}

const getAllUsersFromDB = async (req: Request, res: Response) => {
    try {
        const query = req.query
        const result = await UserServices.getAllUsersFromDB(query)
        res.json({
            success: true,
            message: "User faced successfully",
            data: result
        })
    }
    catch (err) {
        res.json({
            success: false,
            message: "Validation failed",
            error: err
        })
    }
}


export const UserControllers = {
    createUserIntoDB,
    getAllUsersFromDB
}