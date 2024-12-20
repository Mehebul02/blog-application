import { Router } from 'express'
import { UserControllers } from './user.controllers';

const router = Router()

router.post('/create-user', UserControllers.createUserIntoDB)
router.get('/',UserControllers.getAllUsersFromDB)


export const userRouters = router