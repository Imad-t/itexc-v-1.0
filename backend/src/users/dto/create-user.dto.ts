import { Transform } from 'class-transformer'
import { IsString, IsEmail, IsBoolean, IsOptional, ValidateIf, IsEnum } from 'class-validator'
import { FileModel } from 'src/nestjs/models/file.model'
import { Role } from '../role/role.enum'

export class CreateUserDto {
  
  @IsString()
  username: string

  @IsString()
  password: string

  @IsString()
  fullName: string

  @IsEmail()
  email: string

  @IsOptional()
  @IsString()
  phoneNumber: string

  @IsOptional()
  @IsString()
  address: string

  @IsEnum(Role)
  role?: Role

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
  isBusiness: boolean

  @ValidateIf((o) => o.isBusiness === true)
  @IsString()
  storeName: string

  @ValidateIf((o) => o.isBusiness === true)
  @IsOptional()
  @IsString()
  storeAddress: string

  @ValidateIf((o) => o.isBusiness === true)
  @IsEmail()
  storeEmail: string

  @ValidateIf((o) => o.isBusiness === true)
  @IsString()
  storeType: string

  @ValidateIf((o) => o.isBusiness === true)
  @IsString()
  storeCategory: string

  @ValidateIf((o) => o.isBusiness === true)
  @IsOptional()
  @Transform(({ value }) => {
    return value === 'true' || value === true || value === 1
  })
  @IsBoolean()
  hasStoreLogo: boolean

  @ValidateIf((o) => o.isBusiness === true)
  @IsOptional()
  @IsString({ each: true })
  storeLinks: [string, string]

  @IsOptional()
  @IsString()
  commerceRegisterNumber: string

  @IsOptional()
  @IsString()
  nifNumber: string

  @IsOptional()
  storeLogo: FileModel
}
