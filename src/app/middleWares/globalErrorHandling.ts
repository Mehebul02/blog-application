import { ErrorRequestHandler } from "express";
import { TErrorSources } from "../interface/error";
import { ZodError } from "zod";

const globalErrorHandle: ErrorRequestHandler = ((err, req, res, next) => {
    
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Something wend wrong'
    let errorSource:TErrorSources = [
        {
            path: '',
            message: "Something wend wrong"
        }
    ]

    if(err instanceof ZodError){
        const simplifiedError = handleZodError(err);
        statusCode = simplifiedError?.statusCode;
        message= simplifiedError?.message;
        errorSource= simplifiedError?.errorSources;
    }else if(err === 'validationError'){
        const simplifiedError = handleZodError(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSource =simplifiedError.errorSources;
    }
})