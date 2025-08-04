import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('salary_allowance_types' )
export class EmployeeAllowancesTypeTable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  allowance_name: string;

  @Column({ nullable: true })
  conveyance_allowance_amount: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
