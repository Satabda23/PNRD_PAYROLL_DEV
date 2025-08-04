import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { EmployeeAllowancesTypeService } from './employee-allowances-type.service';
import { CreateEmployeeAllowancesTypeDto } from './dto/create-employee-allowances-type.dto';
import { UpdateEmployeeAllowancesTypeDto } from './dto/update-employee-allowances-type.dto';

@Controller('employee-allowances-type')
export class EmployeeAllowancesTypeController {
  constructor(private readonly employeeAllowancesTypeService: EmployeeAllowancesTypeService) {}

  @Post('add-new-allowance-type')
  create(@Body() createEmployeeAllowancesTypeDto: CreateEmployeeAllowancesTypeDto) {
    return this.employeeAllowancesTypeService.create(createEmployeeAllowancesTypeDto);
  }

  @Get()
  findAll() {
    return this.employeeAllowancesTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.employeeAllowancesTypeService.findOne(id);
  }
 

  @Patch(':id/update')
  update(@Param('id') id: number, @Body() updateEmployeeAllowancesTypeDto: UpdateEmployeeAllowancesTypeDto) {
    return this.employeeAllowancesTypeService.update(+id, updateEmployeeAllowancesTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.employeeAllowancesTypeService.remove(+id);
  }
}
