import { IsString } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  brand?: string;

  @IsString()
  model?: string;
}
