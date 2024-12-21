import { Router } from 'express'
import { UserControllers } from './user.controllers';
import validateRequest from '../../app/utils/validateRequest';
import { UserValidation } from './user.validation';

const router = Router()

router.post('/create-user',validateRequest(UserValidation.createUserValidationSchema), UserControllers.createUserIntoDB)
router.get('/',UserControllers.getAllUsersFromDB)


export const userRouters = router