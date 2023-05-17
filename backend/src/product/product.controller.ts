import { Controller, Param, Get, Post, Body, Put, Delete, UseInterceptors, ParseIntPipe, UploadedFiles } from '@nestjs/common'
import { ProductService } from './product.service'
import { FileFieldsInterceptor } from '@nestjs/platform-express'
import { storageOptions } from 'src/nestjs/helpers/file-uploader'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { ProductResponseDto } from './dto/responses/product-response.dto'
import { FileDataMapper } from 'src/nestjs/helpers/file.mapper'
import { ProductSearchFilterDto } from './dto/searchfilter.dto'

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts(productSearchfilterDto?:ProductSearchFilterDto): Promise<ProductResponseDto[]> {
    return await this.productService.getProducts(productSearchfilterDto)
  }

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'picture', maxCount: 1 },
        { name: 'album', maxCount: 8 },
      ],
      { storage: storageOptions('./uploads') }
    )
  )
  createProduct(
    @Body() createProductDto: CreateProductDto,
    @UploadedFiles()
    files?: {
      picture?: Express.Multer.File
      album?: Express.Multer.File[]
    }
  ): Promise<ProductResponseDto> {
    if (files && files.picture) {
      createProductDto.picture = FileDataMapper.fromExpressToDomain(files.picture[0])
    }
    if (files && files.album) {
      files.album.forEach((e) => {
        createProductDto.album.push(FileDataMapper.fromExpressToDomain(e[0]))
      })
    }
    return this.productService.createProduct(createProductDto)
  }
  

  @Get(':id')
  async getProductById(@Param('id', ParseIntPipe) id: number): Promise<ProductResponseDto> {
    return this.productService.getProductById(id)
  }

  @Put(':id')
  async updateProduct(@Param('id', ParseIntPipe) id: number, @Body() productUpdateDto: UpdateProductDto): Promise<ProductResponseDto> {
    return this.productService.updateProduct(+id, productUpdateDto)
  }

  @Delete(':id')
  async deleteProduct(@Param('id', ParseIntPipe) id: number): Promise<ProductResponseDto> {
    return this.productService.deleteProduct(+id)
  }

  @Get('user/:id')
  async getProductsByUser(@Param('id', ParseIntPipe) id: number): Promise<ProductResponseDto[]> {
    return this.productService.getProductsByUser(+id)
  }
}
