import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeAllowancesTypeDto } from './create-employee-allowances-type.dto';
import { IsInt } from 'class-validator';

export class UpdateEmployeeAllowancesTypeDto extends PartialType(CreateEmployeeAllowancesTypeDto) {

    @IsInt()
    id: number;
}
