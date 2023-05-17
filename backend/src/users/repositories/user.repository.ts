import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common'
import { Repository, DataSource } from 'typeorm'
import { User } from '../entities/user.entity'
import { plainToInstance } from 'class-transformer'
import { FileEntity } from 'src/nestjs/entities/file.entity'
import { CreateUserDto } from '../dto/create-user.dto'
import { SearchFilterDto } from '../dto/search-filter.dto'
import { UpdateUserDto } from '../dto/update-user.dto'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager())
  }

  async getAllUsers(searchFilterDto?: SearchFilterDto): Promise<User[]> {
    const query = this.createQueryBuilder('user')
    query.leftJoinAndSelect(`user.picture`, `picture`)
    query.leftJoinAndSelect(`user.storeLogo`, `storeLogo`)
    query.leftJoinAndSelect(`user.storeLinks`, `storeLinks`)

    console.log(searchFilterDto)

    if (searchFilterDto) {
      var i: number = 0
      Object.entries(searchFilterDto).map((key) => {
        console.log(i)
        if (i === 0 && key[1]) {
          query.where(`user.${key[0]} = :value${i}`, { [`value${i}`]: key[1] })
        } else if (key[1]) {
          query.andWhere(`user.${key[0]} = :value${i}`, { [`value${i}`]: key[1] })
        }
        i++
      })
    }
    try {
      return await query.getMany()
    } catch (error) {
      console.log(`Failed to get users`, error.stack)
      throw new InternalServerErrorException()
    }
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user: User = plainToInstance(User, createUserDto) //new User
    user.password_digest = await this.hashPassword(createUserDto.password)
    if (!user.picture) delete user.picture
    if (!user.storeLogo) delete user.storeLogo
    const res= await this.save(user)
    return res
    
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User | undefined> {
    let ToUpdate: User = await this.findOneBy({ id: id })
    if (ToUpdate) {
      if (updateUserDto.password && updateUserDto.password.length != 0) {
        ToUpdate.password_digest = await this.hashPassword(updateUserDto.password)
      }

      if (updateUserDto.hasPicture && updateUserDto.picture) {
        ToUpdate.picture = plainToInstance(FileEntity, updateUserDto.picture)
      }

      if (updateUserDto.hasStoreLogo && updateUserDto.storeLogo) {
        ToUpdate.storeLogo = plainToInstance(FileEntity, updateUserDto.storeLogo)
      }
      return await this.save(ToUpdate)
    } else {
      throw new NotFoundException(`user with id ${id} Not Found`)
    }
  }

  async removeUser(id: number): Promise<User> {
    const userToRemove = await this.findOneBy({ id: id })
    return await this.remove(userToRemove)
  }

  //#region HELPERS
  async verifyPassword(hash: string, password: string): Promise<boolean> {
    return await bcrypt.compare(password, hash)
  }

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10
    const salt = await bcrypt.genSalt(saltRounds)
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
  }
  //#endregion HELPERS
}
