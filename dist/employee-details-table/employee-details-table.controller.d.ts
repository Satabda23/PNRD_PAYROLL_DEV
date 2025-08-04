import { EmployeeDetailsTableService } from './employee-details-table.service';
export declare class EmployeeDetailsTableController {
    private readonly employeeService;
    constructor(employeeService: EmployeeDetailsTableService);
    findAll(page?: number, limit?: number, districtCode?: string): Promise<{
        data: import("./entities/employee-details-table.entity").EmployeeDetailsTable[];
        meta: {
            totalItems: number;
            itemCount: number;
            itemsPerPage: number;
            totalPages: number;
            currentPage: number;
        };
    }>;
}
