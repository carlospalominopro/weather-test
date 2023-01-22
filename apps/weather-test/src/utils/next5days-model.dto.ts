import { IsNotEmpty } from 'class-validator';

export class Next5DaysDto {
  @IsNotEmpty()
  city: string;
}
