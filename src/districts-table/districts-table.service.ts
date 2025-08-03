import { Injectable } from '@nestjs/common';
import { CreateDistrictsTableDto } from './dto/create-districts-table.dto';
import { UpdateDistrictsTableDto } from './dto/update-districts-table.dto';

@Injectable()
export class DistrictsTableService {
  create(createDistrictsTableDto: CreateDistrictsTableDto) {
    return 'This action adds a new districtsTable';
  }

  findAll() {
    return `This action returns all districtsTable`;
  }

  findOne(id: number) {
    return `This action returns a #${id} districtsTable`;
  }

  update(id: number, updateDistrictsTableDto: UpdateDistrictsTableDto) {
    return `This action updates a #${id} districtsTable`;
  }

  remove(id: number) {
    return `This action removes a #${id} districtsTable`;
  }
}
