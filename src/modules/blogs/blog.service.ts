import { TBlogPost } from "./blog.interface";
import { Blog } from "./blog.model";


const createBlogIntoDB = async (payload: TBlogPost) => {
    const result = await Blog.create(payload)
    return result
}


const getAllBlogFromDB = async () => {
    const result = await Blog.find().populate('author')
    return result
}



export const blogServices = {
    createBlogIntoDB,
    getAllBlogFromDB
}