import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DistrictsTable } from './entities/districts-table.entity';
import { DistrictsTableService } from './districts-table.service';
import { DistrictsTableController } from './districts-table.controller';
import { EmployeeDetailsTable } from '../employee-details-table/entities/employee-details-table.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([DistrictsTable, EmployeeDetailsTable]),
  ],
  controllers: [DistrictsTableController],
  providers: [DistrictsTableService],
})
export class DistrictsTableModule {}
