/* eslint-disable @typescript-eslint/no-unused-vars */
import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express"
import catchAsync from "../utils/catchAsync"
import AppError from "../errors/appError";
import httpStatus from "http-status";
import { User } from '../../modules/user/user.model';

const auth = (...requiredRole: string[]) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
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

        if (requiredRole && !requiredRole.includes(role)) {
            throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized")
        }

        req.user = decoded as JwtPayload

        next()

    })
}

export default auth