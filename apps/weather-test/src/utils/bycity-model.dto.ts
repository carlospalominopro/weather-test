import { IsBoolean, IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class ByCityDto {
  @IsNotEmpty()
  @IsString()
  city: string;
  
  getNext5Days: boolean;
}
