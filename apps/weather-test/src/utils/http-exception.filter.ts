import { Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { BaseExceptionFilter } from '@nestjs/core';
import { BadRequestException } from '@nestjs/common/exceptions';

@Catch()
export class HttpExceptionFilter extends BaseExceptionFilter  {
  catch(exception: unknown, host: ArgumentsHost) {    
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    let message = null;
    let code = 'HttpException';

    let status = HttpStatus.INTERNAL_SERVER_ERROR;    
    
    switch (exception.constructor) {
        case HttpException:
            status = (exception as HttpException).getStatus();
            message = (exception as any)?.response?.data;
            break;
        case BadRequestException:
            status = HttpStatus.UNPROCESSABLE_ENTITY
            message = (exception as any)?.response?.message;
            code = (exception as any).code;
            break;
        case String:
            message = exception;
            break;
        default:
            status = HttpStatus.INTERNAL_SERVER_ERROR
            message = (exception as any);
            

    }

    response.status(status).json({status, code, message : message || (exception as any)?.message });
}
}