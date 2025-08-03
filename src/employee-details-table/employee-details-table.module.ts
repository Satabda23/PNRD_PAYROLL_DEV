import { Module } from '@nestjs/common';
import { EmployeeDetailsTableService } from './employee-details-table.service';
import { EmployeeDetailsTableController } from './employee-details-table.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeDetailsTable } from './entities/employee-details-table.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeDetailsTable])],
  controllers: [EmployeeDetailsTableController],
  providers: [EmployeeDetailsTableService],
})
export class EmployeeDetailsTableModule {}
