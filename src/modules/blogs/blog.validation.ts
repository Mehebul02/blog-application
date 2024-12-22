import { z } from "zod";



const createBlogValidation = z.object({
    body: z.object({
        title: z.string({
            required_error: "Title is required",
            invalid_type_error: "Title must be a string",
        }),
        content: z.string({
            required_error: "Content is required",
            invalid_type_error: "Content must be a string",
        }),
        author: z.string({
            required_error: "Author ID is required",
            invalid_type_error: "Author ID must be a valid ObjectId string",
        }).regex(/^[a-fA-F0-9]{24}$/, "Invalid ObjectId format"), 
        isPublished: z.boolean().optional().default(true),
    })
})


export const BlogValidation = {
    createBlogValidation
}