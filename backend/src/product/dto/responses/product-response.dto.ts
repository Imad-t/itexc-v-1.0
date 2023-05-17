import { Exclude, Expose, Type } from 'class-transformer'
import { FileResponse, UserResponseDto } from 'src/users/dto/responses/user-respone.dto'

@Exclude()
export class ProductResponseDto {
  @Expose()
  id: string

  @Expose()
  category: string

  @Expose()
  name: string

  @Expose()
  price: number

  @Expose()
  lastUpdate: Date

  @Expose()
  @Type(() => UserResponseDto)
  user: UserResponseDto

  @Expose()
  @Type(() => FileResponse)
  picture: FileResponse

  @Expose()
  @Type(() => FileResponse)
  album: FileResponse[]
}
