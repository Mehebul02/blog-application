import { Router } from "express";
import validateRequest from "../../app/utils/validateRequest";
import { UserValidation } from "../user/user.validation";
import { AuthControllers } from "./auth.controller";
import { authValidation } from "./auth.validation";


const router = Router()

router.post("/register", validateRequest(UserValidation.createUserValidationSchema), AuthControllers.registerUser)
router.post('/login', validateRequest(authValidation.loginValidationSchema), AuthControllers.loginUser)
export const authRoute = router