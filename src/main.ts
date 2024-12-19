import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

// import { TransformInterceptor } from './common/interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.URI,
  });

  // app.useGlobalInterceptors(new TransformInterceptor());

  await app.listen(3000);
}
bootstrap();
