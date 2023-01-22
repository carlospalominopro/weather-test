import { Test, TestingModule } from '@nestjs/testing';
import { Next5DaysController } from './next-5-days.controller';
import { Next5DaysService } from './next-5-days.service';
import { HttpModule } from '@nestjs/axios/dist';
import { Next5DaysDto } from '../../weather-test/src/utils/next5days-model.dto';
import { ConfigModule } from '@nestjs/config';

describe('Next5DaysController', () => {
  let next5DaysController: Next5DaysController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
    
    imports : [ConfigModule.forRoot(), HttpModule, ],

      controllers: [Next5DaysController],
      providers: [Next5DaysService],
    }).compile();

    next5DaysController = app.get<Next5DaysController>(Next5DaysController);
  });

  describe('next-5-days', () => {
    it('Debe retornar array de datos del clima de los siguientes 5 dias de la ciudad x"', async () => {
      const city = 'Bogota';
      const payload = new Next5DaysDto();

      payload.city = city;

      const res = await next5DaysController.searchNext5Days(payload);

      expect(res).toMatchObject({
        data : {
          location : {
            name: "Bogota"
          }
        }
      });
    });
  });
});
