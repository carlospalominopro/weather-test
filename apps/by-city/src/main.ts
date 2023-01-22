import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices/enums';
import { ByCityModule } from './by-city.module';

import { ValidationPipe } from '@nestjs/common/pipes';
import { ErrorFilter } from '../../weather-test/src/utils/errorfilter.filter';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ByCityModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3001,
      },
    },
  );

  app.useGlobalFilters(new ErrorFilter());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen();
}
bootstrap();
