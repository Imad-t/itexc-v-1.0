import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { SignInDto } from './dto/signin.dto';
import { UserResponseDto } from 'src/users/dto/responses/user-respone.dto';
import { UserRepository } from 'src/users/repositories/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private userRepository:UserRepository

  ) {}

  async register(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    return await this.usersService.createUser(createUserDto);
  }

  async login(
    signInDto: SignInDto ): Promise<{ accessToken: string }> {
    const user = await this.userRepository.findOneBy({ email : signInDto.email });
    if (user && (await bcrypt.compare(signInDto.password, user.password_digest))) {
       const payload: JwtPayload ={
        email: user.email,
        id: user.id,
      };
      console.log(payload);
      const accessToken: string = this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }
}
