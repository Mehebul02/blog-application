import httpStatus from "http-status";
import catchAsync from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";
import { blogServices } from "./blog.service";

const createBlog = catchAsync(async (req, res) => {
    const payload = req.body;

    if (req.user) {
        payload.author = req.user.id; 
    }

    const result = await blogServices.createBlogIntoDB(payload)

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Blog Created successfully",
        data: result
    })
})

const getAllBlogFromDB = catchAsync(async (req, res) => {
   
    const result = await blogServices.getAllBlogFromDB()

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Blog faced successfully",
        data: result
    })
})


export const blogControllers = {
    createBlog,
    getAllBlogFromDB
}