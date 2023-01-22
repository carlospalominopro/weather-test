import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { ClientProxy } from '@nestjs/microservices/client';
import { ByCityDto } from './utils/bycity-model.dto';
import { Next5DaysDto } from 'apps/weather-test/src/utils/next5days-model.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('search_weather')
    private clientSearch: ClientProxy,
    @Inject('search_next_5_days')
    private clientNext: ClientProxy,
  ) {}

  async searchWeather(payload: ByCityDto): Promise<any> {
    if (payload?.getNext5Days) {
      const search_weather = await firstValueFrom(
        this.clientSearch.send('search_weather', payload),
      );

      const search_next_5_days = await firstValueFrom(
        this.clientNext.send('search_next_5_days', payload),
      );

      const data = {
        typeResponse: 2,
        search_weather,
        search_next_5_days,
      };

      return data;
    }

    const search_weather = await firstValueFrom(
      this.clientSearch.send('search_weather', payload),
    );

    const data = {
      typeResponse: 1,
      search_weather,
    };

    return data;
  }

  async searchNext5Days(payload: Next5DaysDto): Promise<any> {
    return this.clientNext.send('search_next_5_days', payload);
  }
}
