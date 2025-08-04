import { DistrictsTableService } from './districts-table.service';
import { CreateDistrictsTableDto } from './dto/create-districts-table.dto';
import { UpdateDistrictsTableDto } from './dto/update-districts-table.dto';
export declare class DistrictsTableController {
    private readonly districtsTableService;
    constructor(districtsTableService: DistrictsTableService);
    create(createDistrictsTableDto: CreateDistrictsTableDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDistrictsTableDto: UpdateDistrictsTableDto): string;
    remove(id: string): string;
}
