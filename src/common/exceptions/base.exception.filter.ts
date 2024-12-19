import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';

import { Catch } from '@nestjs/common';

@Catch()
export class BaseExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    console.log(exception);
  }
}
