import { model, Schema } from "mongoose";
import { TBlogPost } from "./blog.interface";
import AppError from "../../app/errors/appError";
import httpStatus from "http-status";


const blogSchema = new Schema<TBlogPost>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    isPublished: { type: Boolean, default: true },
}, {
    timestamps: true
})


blogSchema.pre('save', async function (next) {

    const isSemesterExists = await Blog.findOne({
        title: this.title,
        content: this.content,
    });
    if (isSemesterExists) {
        throw new AppError(httpStatus.NOT_FOUND,'Blog is all ready exists')
    }
    next()

})

export const Blog = model<TBlogPost>('Blog', blogSchema)