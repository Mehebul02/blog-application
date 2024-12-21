import { UserServices } from "./user.service";
import catchAsync from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";
import httpStatus from "http-status";
import { RequestHandler } from "express";

const createUserIntoDB: RequestHandler = catchAsync(async (req, res) => {
    const payload = req.body
    const result = await UserServices.createUserIntoDB(payload)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User creates successfully",
        data: result
    })
})

const getAllUsersFromDB = catchAsync(async (req, res) => {
    const query = req.query
    const result = await UserServices.getAllUsersFromDB(query)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User faced successfully",
        data: result
    })
})


export const UserControllers = {
    createUserIntoDB,
    getAllUsersFromDB
}