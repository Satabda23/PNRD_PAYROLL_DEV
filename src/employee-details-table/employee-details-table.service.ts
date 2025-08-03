import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeDetailsTable } from './entities/employee-details-table.entity';

@Injectable()
export class EmployeeDetailsTableService {
  constructor(
    @InjectRepository(EmployeeDetailsTable)
    private readonly employeeRepository: Repository<EmployeeDetailsTable>,
  ) {}

  //fetch all employee list with pagination.
  async findAll(page: number, limit: number, districtCode?: string) {
    const take = Math.max(1, limit);
    const skip = Math.max(0, (page - 1) * take);
  
    const whereCondition = districtCode
      ? { district: { district_code: districtCode } }
      : {};
  
    const [data, total] = await this.employeeRepository.findAndCount({
      where: whereCondition,
      skip,
      take,
      relations: ['district'], // important to load district relation
    });
  
    return {
      data,
      meta: {
        totalItems: total,
        itemCount: data.length,
        itemsPerPage: take,
        totalPages: Math.ceil(total / take),
        currentPage: page,
      },
    };
  }
  
  
  
}
