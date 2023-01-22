import { Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { RpcException } from '@nestjs/microservices';

@Catch()

export class ErrorFilter extends BaseExceptionFilter  {
  catch(exception: unknown, host: ArgumentsHost) { 
    let message = null;
    let code = 'HttpException';

    let status = HttpStatus.INTERNAL_SERVER_ERROR;    
    
    switch (exception.constructor) {
        case String:
            message = exception;
            break;
        case RpcException:
            message = (exception as any)?.response?.message;
            break;
        default:
            status = HttpStatus.INTERNAL_SERVER_ERROR
            message = (exception as any);
    }

    // AXIOS HANDLE ERROR
    if((exception as any)?.response?.data){
        message = (exception as any)?.response?.data?.error?.message;
        status = (exception as any)?.response?.status || 422;
        code = 'HttpRequestError'
    }

    return {status, code, message : message || (exception as any)?.message };
}
}