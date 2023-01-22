import { Test, TestingModule } from '@nestjs/testing';
import { ByCityController } from './by-city.controller';
import { ByCityService } from './by-city.service';
import { HttpModule } from '@nestjs/axios/dist';
import { ConfigModule } from '@nestjs/config';
import { ByCityDto } from '../../weather-test/src/utils/bycity-model.dto';

describe('ByCityController', () => {
  let byCityController: ByCityController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports : [ConfigModule.forRoot(), HttpModule, ],
      controllers: [ByCityController],
      providers: [ByCityService],
    }).compile();

    byCityController = app.get<ByCityController>(ByCityController);
  });

  describe('by-city', () => {

    it('Debe retornar array de datos del clima de la ciudad x"', async () => {
      const city = 'Bogota';
      const payload = new ByCityDto();

      payload.city = city;

      const res = await byCityController.searchWeather(payload);

      expect(res).toMatchObject({
        data : {
          location : {}
        }
      });
    });
  });
});
