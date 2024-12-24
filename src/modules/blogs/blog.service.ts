import httpStatus from "http-status";
import AppError from "../../app/errors/appError";
import { TBlogPost } from "./blog.interface";
import { Blog } from "./blog.model";


const createBlogIntoDB = async (payload: TBlogPost) => {
    const result = await Blog.create(payload)
    return result
}


const getSingleBlogFromDB = async (id: string) => {
    const result = await Blog.findById(id).populate("author")
    return result
}

const getAllBlogFromDB = async () => {
    const result = await Blog.find().populate('author')
    return result
}

const updateBlogIntoDB = async (id: string, payload: Partial<TBlogPost>, userId: string) => {
    const blog = await Blog.findById(id);
    console.log('Blog found:', blog); // Debugging: Check the blog data
    
    if (!blog) {
        throw new AppError(httpStatus.NOT_FOUND, 'Blog not found');
    }

    if (blog.author.toString() !== userId) {
        throw new AppError(httpStatus.FORBIDDEN, "You are not authorized to update this blog");
    }

    const result = await Blog.findByIdAndUpdate(id, payload, { new: true, runValidators: true });

    console.log('Updated blog:', result);
    if (!result) {
        throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'Error updating blog');
    }
    return result;
}


const deleteBlog = async(id:string)=>{
    const result  = await Blog.findByIdAndDelete(id ,{new:true})
    return result
}


export const blogServices = {
    createBlogIntoDB,
    getAllBlogFromDB,
    getSingleBlogFromDB,
    updateBlogIntoDB,
    deleteBlog
}