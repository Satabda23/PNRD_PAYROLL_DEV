import { EmployeeAllowancesTableService } from './employee-allowances-table.service';
import { CreateEmployeeAllowancesTableDto } from './dto/create-employee-allowances-table.dto';
import { UpdateEmployeeAllowancesTableDto } from './dto/update-employee-allowances-table.dto';
export declare class EmployeeAllowancesTableController {
    private readonly employeeAllowancesTableService;
    constructor(employeeAllowancesTableService: EmployeeAllowancesTableService);
    create(createEmployeeAllowancesTableDto: CreateEmployeeAllowancesTableDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEmployeeAllowancesTableDto: UpdateEmployeeAllowancesTableDto): string;
    remove(id: string): string;
}
