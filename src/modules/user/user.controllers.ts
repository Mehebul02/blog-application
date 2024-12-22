import { UserServices } from "./user.service";
import catchAsync from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";
import httpStatus from "http-status";
import { RequestHandler } from "express";

const createUserIntoDB: RequestHandler = catchAsync(async (req, res) => {
    // const {admin:adminData} = req.body
    // console.log('role check', adminData);
    const result = await UserServices.createUserIntoDB(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User creates successfully",
        data: result
    })
})

const getAllUsersFromDB = catchAsync(async (req, res) => {

    const { role } = req.user as { role: string }
    const result = await UserServices.getAllUsersFromDB(role === "admin" ? undefined : "user")


    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User faced successfully",
        data: result
    })
})


const getSingleUsersFromDB = catchAsync(async (req, res) => {
    const { id } = req.params
    const result = await UserServices.getSingleUserFromDB(id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User faced successfully",
        data: result
    })
})


export const UserControllers = {
    createUserIntoDB,
    getAllUsersFromDB,
    getSingleUsersFromDB
}