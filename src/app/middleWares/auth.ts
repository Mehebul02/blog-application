import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request } from "express"
import catchAsync from "../utils/catchAsync"
import AppError from "../errors/appError";
import httpStatus from "http-status";
import { User } from '../../modules/user/user.model';


const auth = (RequiredRole: string) => {
    catchAsync(async (req: Request, next: NextFunction) => {
        const token = req.headers.authorization;
        if (!token) {
            throw new AppError(httpStatus.UNAUTHORIZED, 'Token not found')
        }

        const decoded = jwt.verify(token, 'secrete') as JwtPayload

        const { role, email } = decoded
        const user = await User.findOne({ email })

        if (!user) {
            throw new AppError(httpStatus.UNAUTHORIZED, 'User not found')
        }

        if (RequiredRole !== role) {
            throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized")
        }

        req.user = decoded as JwtPayload

    })
}