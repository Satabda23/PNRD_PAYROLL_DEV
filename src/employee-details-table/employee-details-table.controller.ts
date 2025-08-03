
import { Controller, Get, Query } from '@nestjs/common';
import { EmployeeDetailsTableService } from './employee-details-table.service';

@Controller('employee-details-table')
export class EmployeeDetailsTableController {
  constructor(private readonly employeeService: EmployeeDetailsTableService) {}

  @Get()
  findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('districtCode') districtCode?: string,
  ) {
    return this.employeeService.findAll(+page, +limit, districtCode);
  }

}
