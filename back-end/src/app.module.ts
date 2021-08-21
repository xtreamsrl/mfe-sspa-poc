import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { JsonProxyController } from './json-proxy.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    HttpModule,
    AuthModule,
  ],
  controllers: [
    AppController,
    JsonProxyController,
  ],
  providers: [AppService],
})
export class AppModule {
}
