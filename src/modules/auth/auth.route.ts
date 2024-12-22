import { Router } from "express";
import validateRequest from "../../app/utils/validateRequest";
import { UserValidation } from "../user/user.validation";
import { AuthControllers } from "./auth.controller";


const router =Router()

router.post("/register",validateRequest(UserValidation.createUserValidationSchema),AuthControllers.registerUser)

export const authRoute=router