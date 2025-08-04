import { Repository } from 'typeorm';
import { EmployeeDetailsTable } from './entities/employee-details-table.entity';
export declare class EmployeeDetailsTableService {
    private readonly employeeRepository;
    constructor(employeeRepository: Repository<EmployeeDetailsTable>);
    findAll(page: number, limit: number, districtCode?: string): Promise<{
        data: EmployeeDetailsTable[];
        meta: {
            totalItems: number;
            itemCount: number;
            itemsPerPage: number;
            totalPages: number;
            currentPage: number;
        };
    }>;
}
