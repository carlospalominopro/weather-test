import { Module } from '@nestjs/common';
import { ByCityController } from './by-city.controller';
import { ByCityService } from './by-city.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios/dist';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule
  ],
  controllers: [ByCityController],
  providers: [ByCityService],
})
export class ByCityModule {}
