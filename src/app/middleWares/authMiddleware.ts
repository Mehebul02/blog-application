// import { User } from './../../modules/user/user.model';
// import jwt from 'jsonwebtoken';
// import { NextFunction, Request, Response } from 'express';
// import AppError from '../errors/appError';
// import httpStatus from 'http-status';

// const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
//     const token = req.headers.authorization?.split(' ')[1];

//     if (!token) {
//         throw new AppError(httpStatus.UNAUTHORIZED, 'Token not found');
//     }

//     try {
//         const decoded = jwt.verify(token, 'secrete'); // Verify token
//         req.user = decoded; // Attach user info to the request
//         next();
//     } catch (error) {
//         throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid or expired token');
//     }
// };

// export default authMiddleware;
