import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateEmployeeAllowancesTypeDto {
  @IsNotEmpty()
  @IsString()
  allowance_name: string;

  @IsOptional()
  @IsString()
  conveyance_allowance_amount?: string;
}