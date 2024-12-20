import { Router } from "express";
import { userRouters } from "../../modules/user/user.route";


const router = Router()

const moduleRoutes = [
    {
        path: '/users',
        route: userRouters
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))


export default router