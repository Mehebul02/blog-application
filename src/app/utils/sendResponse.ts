import { Response } from "express";

type TResponse<T> = {
    // status: boolean;
    statusCode: number;
    success: boolean;
    message: string;
    token?: string;
    data: T | T[] | null
}

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
    res.status(data?.statusCode).json({
        // status: true,
        success: data.success,
        message: data.message,
        statusCode:data.statusCode,
        token: data.token,
        data: data.data,
    })
}

export default sendResponse