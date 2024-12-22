import httpStatus from "http-status";
import catchAsync from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";
import { AuthServices } from "./auth.service";

const registerUser = catchAsync(async (req, res) => {
    const payload = req.body
    const result = await AuthServices.registerUser(payload)
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "User registered successfully",
        data: {name:result?.name,email:result?.email }
    })
})
const loginUser = catchAsync(async (req, res) => {
    const payload = req.body
    const result = await AuthServices.loginUSer(payload)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User login successfully",
        token: result.token,
        data: {token:result.token}
    })
})








export const AuthControllers = {
    registerUser,
    loginUser
}