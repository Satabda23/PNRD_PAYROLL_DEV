import { DistrictsTable } from 'src/districts-table/entities/districts-table.entity';
export declare class EmployeeDetailsTable {
    employee_id: number;
    name: string;
    email: string;
    program_id: string;
    employee_code: string;
    home_town: string;
    date_of_joining: Date;
    status: boolean;
    district: DistrictsTable;
}
