import { PartialType } from '@nestjs/mapped-types'
import { CreateUserDto } from './create-user.dto'
import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator'
import { Role } from '../role/role.enum'

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  username: string

  @IsOptional()
  password: string

  @IsOptional()
  fullName: string

  @IsOptional()
  email: string

  @IsOptional()
  role?: Role

  @IsOptional()
  hasPicture: boolean

  @IsOptional()
  isBusiness: boolean

  @IsOptional()
  storeName: string

  @IsOptional()
  storeEmail: string

  @IsOptional()
  storeType: string

  @IsOptional()
  storeCategory: string

  @IsOptional()
  hasStoreLogo: boolean
}
