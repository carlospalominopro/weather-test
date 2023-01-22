import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ByCityDto } from './utils/bycity-model.dto';
import { ClientsModule } from '@nestjs/microservices/module';
import { Transport } from '@nestjs/microservices/enums';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './utils/http-exception.filter';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        ClientsModule.register([
          {
            name: 'search_weather',
            transport: Transport.TCP,
            options: { port: 3001 },
          },
          {
            name: 'search_next_5_days',
            transport: Transport.TCP,
            options: { port: 3002 },
          },
        ]),
      ],
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: APP_FILTER,
          useClass: HttpExceptionFilter,
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('Debe retornar array de datos con clima de la ciudad x"', async () => {
      const city = 'Bogota';
      const payload = new ByCityDto();

      payload.city = city;

      const res = await appController.searchWeather(payload);
    
      expect(res).toMatchObject({
        typeResponse: 1,
        search_weather: {}
      });
    });
    it('Debe retornar array de datos con clima de la ciudad x con clima de 5 dias proximos"', async () => {
      const city = 'Bogota';
      const payload = new ByCityDto();

      payload.city = city;
      payload.getNext5Days = true;

      const res = await appController.searchWeather(payload);

      expect(res).toMatchObject({
        typeResponse: 2,
        search_weather: {},
        search_next_5_days: {}
      });
    });

    it('Debe retornar error de ciudad no encontrada"', async () => {
      const city = 'xxxxxxxxx';
      const payload = new ByCityDto();

      payload.city = city;

      const res = await appController.searchWeather(payload);
      
      expect(res).toMatchObject({
        typeResponse: 1,
        search_weather: {
          status : 400,
          code : "HttpRequestError",
          message : "No matching location found."
        },
      });
    });
  });
});
