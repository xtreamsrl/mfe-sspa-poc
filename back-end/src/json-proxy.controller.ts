import { All, Controller, Get, Param, Req, Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';
import { Request, Response } from 'express';
import { firstValueFrom } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';

@Controller('json-api')
export class JsonProxyController {
  constructor(
    private readonly appService: AppService,
    private readonly http: HttpService,
  ) {
  }

  @All('**')
  @UseGuards(AuthGuard('jwt'))
  async root(@Param() param, @Req() req: Request, @Res() res: Response) {

    console.debug('JsonProxyController')

    // faço o proxy
    try {
      const placeRes = await firstValueFrom(
        this.http.request({
          method: req.method as any,
          data: req.body,
          url: `https://jsonplaceholder.typicode.com${req.path}`,
        }),
      );

      res.send(placeRes.data);
    } catch (e) {

    }

  }
}
