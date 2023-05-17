import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile, ParseIntPipe, UploadedFiles } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { SearchFilterDto } from './dto/search-filter.dto'
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express'
import { storageOptions } from 'src/nestjs/helpers/file-uploader'
import { FileDataMapper } from 'src/nestjs/helpers/file.mapper'
import { UserResponseDto } from './dto/responses/user-respone.dto'
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'picture', maxCount: 1 },
        { name: 'storeLogo', maxCount: 1 },
      ],
      { storage: storageOptions('./uploads') }
    )
  )
  createUser(
    @Body() createUserDto: CreateUserDto,
    @UploadedFiles()
    files?: {
      picture?: Express.Multer.File
      storeLogo?: Express.Multer.File
    }
  ) {
    if (files && files.picture && createUserDto.hasPicture) {
      
      createUserDto.picture = FileDataMapper.fromExpressToDomain(files.picture[0])
    }

    if (files && files.storeLogo && createUserDto.hasStoreLogo) {
      createUserDto.storeLogo = FileDataMapper.fromExpressToDomain(files.storeLogo[0])
    }

    return this.usersService.createUser(createUserDto)
  }

  @Patch(':id')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'picture', maxCount: 1 },
        { name: 'storeLogo', maxCount: 1 },
      ],
      { storage: storageOptions('./uploads') }
    )
  )
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
    @UploadedFiles()
    files?: {
      picture?: Express.Multer.File
      storeLogo?: Express.Multer.File
    }
  ): Promise<UserResponseDto> {
    if (files && files.picture && updateUserDto.hasPicture) {
      updateUserDto.picture = FileDataMapper.fromExpressToDomain(files.picture[0])
    }

    if (files && files.storeLogo && updateUserDto.hasStoreLogo) {
      updateUserDto.storeLogo = FileDataMapper.fromExpressToDomain(files.storeLogo[0])
    }
    return this.usersService.updateUser(+id, updateUserDto)
  }

  @Delete(':id')
  removeUser(@Param('id', ParseIntPipe) id: number): Promise<UserResponseDto> {
    return this.usersService.removeUser(+id)
  }

  @Get()
  findAllUsers(@Query() searchFilterDto?: SearchFilterDto): Promise<UserResponseDto[]> {
    return this.usersService.getAllUsers(searchFilterDto)
  }

  @Get(':id')
  findOneById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOneById(+id)
  }

  @Post('upload/:id')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: storageOptions('./uploads'),
    })
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file)
  }
}
