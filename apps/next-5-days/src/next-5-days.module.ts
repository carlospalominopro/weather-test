import { Module } from '@nestjs/common';
import { Next5DaysController } from './next-5-days.controller';
import { Next5DaysService } from './next-5-days.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios/dist';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule
  ],
  controllers: [Next5DaysController],
  providers: [Next5DaysService],
})
export class Next5DaysModule {}
