import { Router } from 'express'
import { UserControllers } from './user.controllers';
import validateRequest from '../../app/utils/validateRequest';
import { UserValidation } from './user.validation';
import auth from '../../app/middleWares/auth';

const router = Router()

router.post('/create-user',validateRequest(UserValidation.createUserValidationSchema), UserControllers.createUserIntoDB)
router.get('/',auth('admin','user') ,UserControllers.getAllUsersFromDB)


export const userRouters = router