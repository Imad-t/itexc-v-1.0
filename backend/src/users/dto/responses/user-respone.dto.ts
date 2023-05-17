import { Exclude, Expose, Type } from 'class-transformer'

@Exclude()
export class LinkResponseDto {
  @Expose()
  title: string

  @Expose()
  url: string
}

@Exclude()
export class FileResponse {
  @Expose()
  id?: number

  @Expose()
  url: string
}

@Exclude()
export class UserResponseDto {
  @Expose()
  id: number

  @Expose()
  @Type(() => FileResponse)
  picture: FileResponse

  @Expose()
  @Type(() => FileResponse)
  storeLogo: FileResponse

  @Expose()
  @Type(() => FileResponse)
  storeLinks: LinkResponseDto
}
