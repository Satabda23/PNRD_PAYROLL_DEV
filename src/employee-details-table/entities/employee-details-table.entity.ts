import { DistrictsTable } from 'src/districts-table/entities/districts-table.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('employees') 
export class EmployeeDetailsTable {
  @PrimaryGeneratedColumn()
  employee_id: number;

  @Column()
  name: string;

 @Column()
 email:string;

 @Column()
 program_id:string;

  @Column()
  employee_code:string;

  @Column()
  home_town: string;

  @Column({ type: 'date' })
  date_of_joining: Date;


  @Column({ default: true })
  status: boolean;

 

  @ManyToOne(() => DistrictsTable, (district) => district.employees)
@JoinColumn({ name: 'district_code', referencedColumnName: 'district_code' })
district: DistrictsTable;
}
