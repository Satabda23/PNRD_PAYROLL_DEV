import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DistrictsTableService } from './districts-table.service';
import { CreateDistrictsTableDto } from './dto/create-districts-table.dto';
import { UpdateDistrictsTableDto } from './dto/update-districts-table.dto';

@Controller('districts-table')
export class DistrictsTableController {
  constructor(private readonly districtsTableService: DistrictsTableService) {}

  @Post()
  create(@Body() createDistrictsTableDto: CreateDistrictsTableDto) {
    return this.districtsTableService.create(createDistrictsTableDto);
  }

  @Get()
  findAll() {
    return this.districtsTableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.districtsTableService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDistrictsTableDto: UpdateDistrictsTableDto) {
    return this.districtsTableService.update(+id, updateDistrictsTableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.districtsTableService.remove(+id);
  }
}
