import { Controller, Body } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ByCityDto } from '../../weather-test/src/utils/bycity-model.dto';
import { ByCityService } from './by-city.service';

@Controller()
export class ByCityController {
  constructor(private readonly byCityService: ByCityService) {}

  @EventPattern('search_weather')
  async searchWeather(@Body() data: ByCityDto) {    
    return this.byCityService.searchWeather(data);
  }
  
}
