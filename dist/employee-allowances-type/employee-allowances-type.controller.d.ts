import { EmployeeAllowancesTypeService } from './employee-allowances-type.service';
import { CreateEmployeeAllowancesTypeDto } from './dto/create-employee-allowances-type.dto';
import { UpdateEmployeeAllowancesTypeDto } from './dto/update-employee-allowances-type.dto';
export declare class EmployeeAllowancesTypeController {
    private readonly employeeAllowancesTypeService;
    constructor(employeeAllowancesTypeService: EmployeeAllowancesTypeService);
    create(createEmployeeAllowancesTypeDto: CreateEmployeeAllowancesTypeDto): Promise<{
        status: boolean;
        status_text: string;
        data: import("./entities/employee-allowances-type.entity").EmployeeAllowancesTypeTable;
    }>;
    findAll(): Promise<import("./entities/employee-allowances-type.entity").EmployeeAllowancesTypeTable[]>;
    findOne(id: number): Promise<import("./entities/employee-allowances-type.entity").EmployeeAllowancesTypeTable>;
    update(id: number, updateEmployeeAllowancesTypeDto: UpdateEmployeeAllowancesTypeDto): Promise<{
        status: boolean;
        status_text: string;
        data: import("./entities/employee-allowances-type.entity").EmployeeAllowancesTypeTable & UpdateEmployeeAllowancesTypeDto;
    }>;
    remove(id: number): Promise<{
        status: boolean;
        status_text: string;
        data: import("./entities/employee-allowances-type.entity").EmployeeAllowancesTypeTable;
    }>;
}
