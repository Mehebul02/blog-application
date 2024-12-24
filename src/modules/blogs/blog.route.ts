import { Router } from "express";
import validateRequest from "../../app/utils/validateRequest";
import { BlogValidation } from "./blog.validation";
import { blogControllers } from "./blog.controller";


const router = Router()

router.post('/create-blog', validateRequest(BlogValidation.createBlogValidation), blogControllers.createBlog)

router.get('/:id', blogControllers.getSingleBlogFromDB)
router.patch('/:id', validateRequest(BlogValidation.updateBlogValidation), blogControllers.updateBlog)
router.delete('/:id', blogControllers.deleteBlog)

router.get('/', blogControllers.getAllBlogFromDB)

export const blogRouters = router