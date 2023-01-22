import { NestFactory } from '@nestjs/core';
import { Next5DaysModule } from './next-5-days.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices/enums';

import { ValidationPipe } from '@nestjs/common/pipes';
import { ErrorFilter } from '../../weather-test/src/utils/errorfilter.filter';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    Next5DaysModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3002,
      },
    },
  );

  app.useGlobalFilters(new ErrorFilter());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen();
}
bootstrap();
