import { PartialType } from "@nestjs/mapped-types"
import { CreateProductDto } from "./create-product.dto"
import { IsEmpty } from "class-validator"

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsEmpty()
  userId: number
}
