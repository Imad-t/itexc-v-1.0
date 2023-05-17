import { PartialType } from '@nestjs/mapped-types'
import { UpdateUserDto } from './update-user.dto'
import { IsBoolean, IsEmpty } from 'class-validator'

export class SearchFilterDto extends PartialType(UpdateUserDto) {
  @IsEmpty()
  password?: string

  @IsEmpty()
  storeLinks?: [string, string]
}
