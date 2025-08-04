import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeAllowancesTypeDto } from './dto/create-employee-allowances-type.dto';
import { UpdateEmployeeAllowancesTypeDto } from './dto/update-employee-allowances-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeAllowancesTypeTable } from './entities/employee-allowances-type.entity';

@Injectable()
export class EmployeeAllowancesTypeService {
  constructor(
    @InjectRepository(EmployeeAllowancesTypeTable)
    private readonly employeeAllowancesTypeRepo: Repository<EmployeeAllowancesTypeTable>,
  ) {}
  async create(createDto: CreateEmployeeAllowancesTypeDto) {
    const newAllowanceType = this.employeeAllowancesTypeRepo.create(createDto);
    let result= await this.employeeAllowancesTypeRepo.save(newAllowanceType);

    return {
      status:true,
      status_text:"Successfully Created the Allowance Type",
      data:result
    }
  }

  async findAll() {
    return await this.employeeAllowancesTypeRepo.find();
  }


  async findOne(id: number) {
    let allowanceType= await this.employeeAllowancesTypeRepo.findOne({
      where:{
        id
      }
    })
    if(!allowanceType){
      throw new NotFoundException(`Not found`);
    }
    return allowanceType;
  }

  async update(id: number, updateDto: UpdateEmployeeAllowancesTypeDto){
    const existing = await this.employeeAllowancesTypeRepo.findOneBy({ id });
  
    if (!existing) {
      throw new NotFoundException(`Not found`);
    }
  
    const updated = Object.assign(existing, updateDto);
    let result= await this.employeeAllowancesTypeRepo.save(updated);
    return {
      status:true,
      status_text:"Successfully Updated",
      data:result
    }
  }

 
async remove(id: number) {
  const record = await this.employeeAllowancesTypeRepo.findOneBy({ id });

  if (!record) {
    throw new NotFoundException(`Allowance Type with ID ${id} not found`);
  }

 let result= await this.employeeAllowancesTypeRepo.remove(record);

 return {
  status:true,
  status_text:"Successfully Removed",
  data:result
 }

}

}
