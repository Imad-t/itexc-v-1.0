import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { plainToInstance } from 'class-transformer'
import { SearchFilterDto } from './dto/search-filter.dto'
import { UserResponseDto } from './dto/responses/user-respone.dto'
import { UserRepository } from './repositories/user.repository'

@Injectable()
export class UsersService {
  constructor(readonly userRepository: UserRepository) {}

  async getAllUsers(searchFilterDto?: SearchFilterDto): Promise<UserResponseDto[]> {
    try {
      return plainToInstance(UserResponseDto, await this.userRepository.getAllUsers(searchFilterDto))
    } catch (error) {
      console.log(`Failed to get users`, error.stack)
      throw new InternalServerErrorException()
    }
  }

  async createUser(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    return plainToInstance(UserResponseDto, await this.userRepository.createUser(createUserDto))
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<UserResponseDto> {
    return plainToInstance(UserResponseDto, await this.userRepository.updateUser(id, updateUserDto))
  }

  async removeUser(id: number): Promise<UserResponseDto> {
    return plainToInstance(UserResponseDto, await this.userRepository.removeUser(id))
  }

  async findOneById(id: number): Promise<UserResponseDto> {
    return plainToInstance(UserResponseDto, await this.userRepository.findOneBy({ id: id }))
  }
}
