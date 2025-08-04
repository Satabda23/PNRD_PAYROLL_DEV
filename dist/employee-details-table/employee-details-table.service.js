"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeDetailsTableService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const employee_details_table_entity_1 = require("./entities/employee-details-table.entity");
let EmployeeDetailsTableService = class EmployeeDetailsTableService {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    async findAll(page, limit, districtCode) {
        const take = Math.max(1, limit);
        const skip = Math.max(0, (page - 1) * take);
        const whereCondition = districtCode
            ? { district: { district_code: districtCode } }
            : {};
        const [data, total] = await this.employeeRepository.findAndCount({
            where: whereCondition,
            skip,
            take,
            relations: ['district'],
        });
        return {
            data,
            meta: {
                totalItems: total,
                itemCount: data.length,
                itemsPerPage: take,
                totalPages: Math.ceil(total / take),
                currentPage: page,
            },
        };
    }
};
exports.EmployeeDetailsTableService = EmployeeDetailsTableService;
exports.EmployeeDetailsTableService = EmployeeDetailsTableService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employee_details_table_entity_1.EmployeeDetailsTable)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EmployeeDetailsTableService);
//# sourceMappingURL=employee-details-table.service.js.map