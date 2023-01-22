import { Controller, Get, Body } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { Next5DaysDto } from '../../weather-test/src/utils/next5days-model.dto';
import { Next5DaysService } from './next-5-days.service';

@Controller()
export class Next5DaysController {
  constructor(private readonly next5DaysService: Next5DaysService) {}

  @EventPattern('search_next_5_days')
  async searchNext5Days(@Body() data : Next5DaysDto) {    
    return this.next5DaysService.searchNext5Days(data);
  }
}
