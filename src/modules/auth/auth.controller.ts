import httpStatus from "http-status";
import catchAsync from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";
import { AuthServices } from "./auth.service";

const  registerUser = catchAsync(async (req, res) => {
    const payload = req.body
    const result = await AuthServices.registerUser(payload)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User registered successfully",
        data: result
    })
})


const loginUser = catchAsync(async(req,res)=>{

})







export const AuthControllers = {
    registerUser,
    loginUser
}