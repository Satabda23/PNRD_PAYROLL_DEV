import { CreateEmployeeAllowancesTypeDto } from './dto/create-employee-allowances-type.dto';
import { UpdateEmployeeAllowancesTypeDto } from './dto/update-employee-allowances-type.dto';
import { Repository } from 'typeorm';
import { EmployeeAllowancesTypeTable } from './entities/employee-allowances-type.entity';
export declare class EmployeeAllowancesTypeService {
    private readonly employeeAllowancesTypeRepo;
    constructor(employeeAllowancesTypeRepo: Repository<EmployeeAllowancesTypeTable>);
    create(createDto: CreateEmployeeAllowancesTypeDto): Promise<{
        status: boolean;
        status_text: string;
        data: EmployeeAllowancesTypeTable;
    }>;
    findAll(): Promise<EmployeeAllowancesTypeTable[]>;
    findOne(id: number): Promise<EmployeeAllowancesTypeTable>;
    update(id: number, updateDto: UpdateEmployeeAllowancesTypeDto): Promise<{
        status: boolean;
        status_text: string;
        data: EmployeeAllowancesTypeTable & UpdateEmployeeAllowancesTypeDto;
    }>;
    remove(id: number): Promise<{
        status: boolean;
        status_text: string;
        data: EmployeeAllowancesTypeTable;
    }>;
}
