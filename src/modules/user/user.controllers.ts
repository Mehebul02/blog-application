import { Request, Response } from "express";
import { UserServices } from "./user.service";


const createUser = async (req: Request, res: Response) => {
    try {
        const payload = req.body
        const result = await UserServices.createUser(payload)
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



export const UserControllers ={
    createUser
}