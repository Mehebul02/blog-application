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

const updateBlogIntoDB = async (id: string, payload: Partial<TBlogPost>) => {
    const result = await Blog.findByIdAndUpdate(id, payload, { new: true ,runValidators:true})
    return result
}



export const blogServices = {
    createBlogIntoDB,
    getAllBlogFromDB,
    getSingleBlogFromDB,
    updateBlogIntoDB
}