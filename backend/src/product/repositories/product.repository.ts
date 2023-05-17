import { DataSource, Repository } from 'typeorm'
import { ProductEntity } from '../entities/product.entity'
import { Injectable } from '@nestjs/common'
import { UserRepository } from 'src/users/repositories/user.repository'
import { CreateProductDto } from '../dto/create-product.dto'
import { plainToInstance } from 'class-transformer'
import { FileEntity } from 'src/nestjs/entities/file.entity'
import { UpdateProductDto } from '../dto/update-product.dto'
import { removeFile } from 'src/nestjs/helpers/file-storage'
import { FileRepository } from 'src/nestjs/repositories/file.repository'
import { ProductSearchFilterDto } from '../dto/searchfilter.dto'

@Injectable()
export class ProductRepository extends Repository<ProductEntity> {
  constructor(private dataSource: DataSource, private userRepository: UserRepository, private fileRepository: FileRepository) {
    super(ProductEntity, dataSource.createEntityManager())
  }

  async findAllProducts(searchFilterDto?: ProductSearchFilterDto): Promise<ProductEntity[]> {
    const query = this.createQueryBuilder('product')
    query.leftJoinAndSelect('product.picture', 'picture')
    query.leftJoinAndSelect('product.album', 'album')
    if (searchFilterDto) {
      var i: number = 0
      Object.entries(searchFilterDto).map((key) => {
        if (i == 0 && key[1]) {
          if (key[0].includes('Range')) {
            query.where(`user.${key[0]} >= :value${i} `, { [`value${i}`]: key[1][0] })
            i++
            query.andWhere(`user.${key[0]} <= :value${i}`, { [`value${i}`]: key[1][1] })
          } else {
            query.where(`user.${key[0]} = :value${i}`, { [`value${i}`]: key[1] })
          }
        } else if (key[1]) {
          if (key[0].includes('Range')) {
            query.andWhere(`user.${key[0]} >= :value${i} `, { [`value${i}`]: key[1][0] })
            i++
            query.andWhere(`user.${key[0]} <= :value${i}`, { [`value${i}`]: key[1][1] })
          } else {
            query.andWhere(`user.${key[0]} = :value${i}`, { [`value${i}`]: key[1] })
          }
        }
        i++
      })
    }
    try {
      return await query.getMany()
    } catch (error) {
      console.log(error)
    }
  }

  async createProduct(createProductDto: CreateProductDto): Promise<ProductEntity> {
    let user = await this.userRepository.findOneBy({ id: createProductDto.userId })
    if (user) {
      const product = plainToInstance(ProductEntity, createProductDto)
      product.picture = plainToInstance(FileEntity, createProductDto.picture)
      if (createProductDto.album)
        createProductDto.album.forEach((e) => {
          product.album.push(plainToInstance(FileEntity, e[0]))
        })

      product.user = user
      user.products.push(product)
      try {
        return await this.save(product)
      } catch (error) {
        throw new Error(`Failed to add product: ${error.message}`)
      }
    }
  }

  async updateProduct(id: number, updateProductDto: UpdateProductDto): Promise<ProductEntity> {
    let product = await this.findOneBy({ id: id })
    if (product) {
      product = plainToInstance(ProductEntity, updateProductDto)
      if (product.picture) {
        try {
          removeFile(await this.fileRepository.remove(await this.fileRepository.findOneBy({ url: product.picture.url })))
        } catch (error) {
          console.log(error)
        }
        product.picture = plainToInstance(FileEntity, updateProductDto.picture)
      }
      if (updateProductDto.album) {
        updateProductDto.album.forEach((e) => {
          product.album.push(plainToInstance(FileEntity, e[0]))
        })
      }
      try {
        return await this.save(product)
      } catch (error) {
        throw new Error(`Failed to add product: ${error.message}`)
      }
    }
  }

  async removeProduct(id: number): Promise<ProductEntity> {
    return await this.remove(await this.findOneBy({ id: id }))
  }

  async getProductsByUser(userId: number): Promise<ProductEntity[]> {
    try {
      const user = await this.userRepository
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.products','product')
        .where(`user.id = :a`,{a:userId})
        .getOne()
      return user.products
    } catch (error) {
      console.log(error)
    }
  }
}
