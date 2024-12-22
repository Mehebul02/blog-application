import jwt from 'jsonwebtoken';
import { NextFunction, Request } from "express"
import catchAsync from "../utils/catchAsync"
import AppError from "../errors/appError";
import httpStatus from "http-status";


const auth = (RequiredRole: string) => {
    catchAsync(async (req: Request, next: NextFunction) => {
        const token = req.headers.authorization;
        if (!token) {
            throw new AppError(httpStatus.UNAUTHORIZED, 'Token not found')
        }

        const decoded = jwt.verify(token,'secrete')

    })
}