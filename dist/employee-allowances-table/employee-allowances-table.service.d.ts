import { CreateEmployeeAllowancesTableDto } from './dto/create-employee-allowances-table.dto';
import { UpdateEmployeeAllowancesTableDto } from './dto/update-employee-allowances-table.dto';
export declare class EmployeeAllowancesTableService {
    create(createEmployeeAllowancesTableDto: CreateEmployeeAllowancesTableDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEmployeeAllowancesTableDto: UpdateEmployeeAllowancesTableDto): string;
    remove(id: number): string;
}
