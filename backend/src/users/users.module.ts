import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { LinkRepository } from './repositories/link.repository'
import { UserRepository } from './repositories/user.repository'
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UserRepository, LinkRepository, UsersService],
  exports: [UserRepository, UsersService],
})
export class UsersModule {}
