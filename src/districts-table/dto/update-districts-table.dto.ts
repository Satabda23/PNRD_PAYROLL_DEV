import { PartialType } from '@nestjs/mapped-types';
import { CreateDistrictsTableDto } from './create-districts-table.dto';

export class UpdateDistrictsTableDto extends PartialType(CreateDistrictsTableDto) {}
