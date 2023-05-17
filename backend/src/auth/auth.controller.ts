import { Get, Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { SignInDto } from './dto/signin.dto';
import { UserResponseDto } from 'src/users/dto/responses/user-respone.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  register(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
    return this.authService.register(createUserDto);
  }

  @Post('/login')
  login(
    @Body() signInDto: SignInDto,
  ): Promise<{ accessToken: string }> { 
    return this.authService.login(signInDto);
  }
}
