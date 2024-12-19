// import {
//   CallHandler,
//   NestInterceptor,
//   ExecutionContext,
//   Injectable,
// } from '@nestjs/common';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs';

// /**
//  * 定义标准响应数据结构的接口
//  */
// interface Response<T> {
//   data: T;
//   message: string;
// }

// @Injectable()
// export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
//   intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
//     return next.handle().pipe(
//       map((data) => ({
//         data: JSON.parse(JSON.stringify(data)),
//         message: "success",
//       }))
//     );
//   }
// }
