import { Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'
import { plainToInstance } from 'class-transformer'
import { ProductResponseDto } from './dto/responses/product-response.dto'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { ProductRepository } from './repositories/product.repository'
import { ProductSearchFilterDto } from './dto/searchfilter.dto'

@Injectable()
export class ProductService {
  constructor(readonly productRepository: ProductRepository, private dataSource: DataSource) {}

  async createProduct(createProductDto: CreateProductDto): Promise<ProductResponseDto> {
    return plainToInstance(ProductResponseDto, await this.productRepository.createProduct(createProductDto))
  }

  async getProductById(id: number): Promise<ProductResponseDto> {
    try {
      return plainToInstance(ProductResponseDto, await this.productRepository.findOne({ relations: { user: true }, where: { id: id } }))
    } catch (error) {
      throw new Error(`Failed to get product: ${error.message}`)
    }
  }

  async getProducts(productSearchFilterDto?: ProductSearchFilterDto): Promise<ProductResponseDto[]> {
    try {
      let productsDto = await this.productRepository.findAllProducts(productSearchFilterDto)
      return plainToInstance(ProductResponseDto, productsDto)
    } catch (error) {
      throw new Error(`Failed to get products: ${error.message}`)
    }
  }

  async updateProduct(id: number, updateProductDto: UpdateProductDto): Promise<ProductResponseDto> {
    try {
      return plainToInstance(ProductResponseDto, this.productRepository)
    } catch (error) {
      throw new Error(`Failed to update product: ${error.message}`)
    }
  }

  async deleteProduct(id: number): Promise<ProductResponseDto> {
    try {
      return plainToInstance(ProductResponseDto, await this.productRepository.removeProduct(id))
    } catch (error) {
      throw new Error(`Failed to delete product: ${error.message}`)
    }
  }

  async getProductsByUser(userId: number): Promise<ProductResponseDto[]> {
    const products = await this.productRepository.getProductsByUser(+userId)
    return plainToInstance(ProductResponseDto, products)
  }
}
