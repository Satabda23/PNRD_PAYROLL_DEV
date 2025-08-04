import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { EmployeeDetailsTable } from 'src/employee-details-table/entities/employee-details-table.entity';

@Entity('districts')
export class DistrictsTable {
  @PrimaryColumn({ type: 'varchar', length: 10 }) // You can adjust the length as needed
  district_code: string;

  @Column()
  district_name: string;

  @OneToMany(() => EmployeeDetailsTable, (employee) => employee.district)
  employees: EmployeeDetailsTable[];


}
