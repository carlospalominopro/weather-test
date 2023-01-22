import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ByCityDto } from './utils/bycity-model.dto';
import { Next5DaysDto } from './utils/next5days-model.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('search-weather')
  searchWeather(@Body() data : ByCityDto): Promise<any> {    
    return this.appService.searchWeather(data);
  }
  
  @Post('search-next-5-days')
  searchNext5Days(@Body() data : Next5DaysDto): Promise<any> {    
    return this.appService.searchNext5Days(data);
  }
}
