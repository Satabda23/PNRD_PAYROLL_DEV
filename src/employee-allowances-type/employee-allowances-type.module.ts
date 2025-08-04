import { Module } from '@nestjs/common';
import { EmployeeAllowancesTypeService } from './employee-allowances-type.service';
import { EmployeeAllowancesTypeController } from './employee-allowances-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeAllowancesTypeTable } from './entities/employee-allowances-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeAllowancesTypeTable])],
  controllers: [EmployeeAllowancesTypeController],
  providers: [EmployeeAllowancesTypeService],
})
export class EmployeeAllowancesTypeModule {}
