import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { LoggerMiddleWare } from './logger.middleware';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileModule } from './profile/profile.module';
import { LogModule } from './log/log.module';
import { RoleModule } from './role/role.module';
import { configModuleOptions, databaseConfig } from './config/database.config';

@Module({
  imports: [
    CatModule,
    UserModule,
    TodoModule,
    ConfigModule.forRoot(configModuleOptions),
    TypeOrmModule.forRootAsync(databaseConfig),
    ProfileModule,
    LogModule,
    RoleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleWare).forRoutes('cat');
  }
}
