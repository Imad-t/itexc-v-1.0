import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductController } from './product.controller'
import { ProductService } from './product.service'
import { ProductEntity } from './entities/product.entity'
import { ProductRepository } from './repositories/product.repository'
import { UsersModule } from 'src/users/users.module'
import { FileModule } from 'src/nestjs/file.module'

@Module({
  imports: [
    UsersModule,
    FileModule,
    TypeOrmModule.forFeature([ProductEntity, ProductRepository]),],
  controllers: [ProductController],
  providers: [ProductRepository, ProductService],
})
export class ProductModule {}
