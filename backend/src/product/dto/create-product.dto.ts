import { Transform } from 'class-transformer'
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator'
import { FileModel } from 'src/nestjs/models/file.model'

export class CreateProductDto {
  @IsNumber() //TODO, custom validation method using userRepository
  userId: number
  
  @IsString()
  category: string
  
  @IsString()
  type: string
  
  @IsString()
  name: string
  
  @IsNumber()
  price: number

  @IsString()
  description: string
  
  @IsNumber()
  quantity: number
  
  @Transform(({ value }) => {
    return value === 'true' || value === true || value === 1
  })
  @IsBoolean()
  hasPicture: boolean

  @IsOptional()
  picture: FileModel
  
  @Transform(({ value }) => {
    return value === 'true' || value === true || value === 1
  })
  @IsBoolean()
  hasAlbum: boolean
  
  @IsOptional()
  album: FileModel[]
}
