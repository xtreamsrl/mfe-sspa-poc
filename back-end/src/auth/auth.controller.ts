import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { LoginDto } from './login.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { User } from './user.model';

@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService,
    private readonly http: HttpService,
  ) {
  }

  @Get()
  getHello(): string {
    return 'test';
  }

  @Post('login')
  async login(@Body() loginRequest: LoginDto, @Res() response: Response) {


    const email = loginRequest.email;

    const placeRes = (
      await firstValueFrom(
        this.http.get<User[]>(
          `https://jsonplaceholder.typicode.com/users?email=${email}`,
        ),
      )
    ).data;
    if (placeRes.length === 0) {
      response.status(401).send();
    }else {
      const userId = loginRequest.email;

      const payload = { email: email, userId };
      const token = this.jwtService.sign(payload);
      response
        .cookie('access_token', token, {
          httpOnly: true,
          domain: 'localhost', // your domain here!
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        })
        .send(placeRes[0]);
    }

  }
}
