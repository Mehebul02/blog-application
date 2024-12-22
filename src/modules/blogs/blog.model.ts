import { model, Schema } from "mongoose";
import { TBlogPost } from "./blog.interface";


const blogSchema = new Schema<TBlogPost>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    isPublished: { type: Boolean, default: true },
}, {
    timestamps: true
})

export const Blog = model<TBlogPost>('Blog', blogSchema)