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
exports.EmployeeAllowancesTypeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const employee_allowances_type_entity_1 = require("./entities/employee-allowances-type.entity");
let EmployeeAllowancesTypeService = class EmployeeAllowancesTypeService {
    constructor(employeeAllowancesTypeRepo) {
        this.employeeAllowancesTypeRepo = employeeAllowancesTypeRepo;
    }
    async create(createDto) {
        const newAllowanceType = this.employeeAllowancesTypeRepo.create(createDto);
        let result = await this.employeeAllowancesTypeRepo.save(newAllowanceType);
        return {
            status: true,
            status_text: "Successfully Created the Allowance Type",
            data: result
        };
    }
    async findAll() {
        return await this.employeeAllowancesTypeRepo.find();
    }
    async findOne(id) {
        let allowanceType = await this.employeeAllowancesTypeRepo.findOne({
            where: {
                id
            }
        });
        if (!allowanceType) {
            throw new common_1.NotFoundException(`Not found`);
        }
        return allowanceType;
    }
    async update(id, updateDto) {
        const existing = await this.employeeAllowancesTypeRepo.findOneBy({ id });
        if (!existing) {
            throw new common_1.NotFoundException(`Not found`);
        }
        const updated = Object.assign(existing, updateDto);
        let result = await this.employeeAllowancesTypeRepo.save(updated);
        return {
            status: true,
            status_text: "Successfully Updated",
            data: result
        };
    }
    async remove(id) {
        const record = await this.employeeAllowancesTypeRepo.findOneBy({ id });
        if (!record) {
            throw new common_1.NotFoundException(`Allowance Type with ID ${id} not found`);
        }
        let result = await this.employeeAllowancesTypeRepo.remove(record);
        return {
            status: true,
            status_text: "Successfully Removed",
            data: result
        };
    }
};
exports.EmployeeAllowancesTypeService = EmployeeAllowancesTypeService;
exports.EmployeeAllowancesTypeService = EmployeeAllowancesTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employee_allowances_type_entity_1.EmployeeAllowancesTypeTable)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EmployeeAllowancesTypeService);
//# sourceMappingURL=employee-allowances-type.service.js.map