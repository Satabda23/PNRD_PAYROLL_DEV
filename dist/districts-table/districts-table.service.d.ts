import { CreateDistrictsTableDto } from './dto/create-districts-table.dto';
import { UpdateDistrictsTableDto } from './dto/update-districts-table.dto';
export declare class DistrictsTableService {
    create(createDistrictsTableDto: CreateDistrictsTableDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDistrictsTableDto: UpdateDistrictsTableDto): string;
    remove(id: number): string;
}
