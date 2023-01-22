import { Injectable } from '@nestjs/common';
import { Next5DaysDto } from '../../weather-test/src/utils/next5days-model.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class Next5DaysService {
  
  constructor(
    private readonly httpService: HttpService,
  ) {
  }
  
  async searchNext5Days(data : Next5DaysDto){
    const url = `${process.env.API_URL}/forecast.json?key=${process.env.API_KEY}&q=${data.city}&days=5&`;

    const httpRequest = await this.httpService.axiosRef.get(url, {
      headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
    });

    return {
      data: httpRequest.data,
    };
  }

}
