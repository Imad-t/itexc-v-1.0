import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './users/entities/user.entity'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import configuration from 'config/configuration'
import { ProductEntity } from './product/entities/product.entity'
import { ServeStaticModule } from '@nestjs/serve-static'
import { typeOrmModuleAsyncConfig } from 'config/typeorm.config'
import { ProductModule } from './product/product.module'

const path = require('path')

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: `${process.cwd()}/config/.env`,
    }),
    TypeOrmModule.forRootAsync(typeOrmModuleAsyncConfig),
    ServeStaticModule.forRoot({ rootPath: 'uploads', serveRoot: '/uploads' }),
    UsersModule,
    AuthModule,
    ProductModule,
    TypeOrmModule.forFeature([User, ProductEntity]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
