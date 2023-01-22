import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ByCityDto } from '../../weather-test/src/utils/bycity-model.dto';

@Injectable()
export class ByCityService {
  constructor(private readonly httpService: HttpService) {}

  async searchWeather(data: ByCityDto) {

    const url = `${process.env.API_URL}/current.json?key=${process.env.API_KEY}&q=${data.city}`;

    const httpRequest = await this.httpService.axiosRef.get(url, {
      headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
    });

    return {
      data: httpRequest.data,
    };
  
  }
}
