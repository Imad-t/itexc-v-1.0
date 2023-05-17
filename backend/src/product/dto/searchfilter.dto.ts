import { PartialType } from '@nestjs/mapped-types'
import { IsEmpty, IsOptional } from 'class-validator'
import { FileModel } from 'src/nestjs/models/file.model'
import { UpdateProductDto } from './update-product.dto'

export declare type range<T> = [T, T]

export class ProductSearchFilterDto extends PartialType(UpdateProductDto) {
  @IsOptional()
  priceRange: range<number>

  @IsOptional()
  quantityRange: range<number>

  @IsEmpty()
  hasPicture?: boolean

  @IsEmpty()
  hasAlbum?: boolean

  @IsEmpty()
  picture: FileModel

  @IsEmpty()
  album: FileModel[]
}
