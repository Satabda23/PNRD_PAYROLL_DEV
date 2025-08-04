"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeAllowancesTableService = void 0;
const common_1 = require("@nestjs/common");
let EmployeeAllowancesTableService = class EmployeeAllowancesTableService {
    create(createEmployeeAllowancesTableDto) {
        return 'This action adds a new employeeAllowancesTable';
    }
    findAll() {
        return `This action returns all employeeAllowancesTable`;
    }
    findOne(id) {
        return `This action returns a #${id} employeeAllowancesTable`;
    }
    update(id, updateEmployeeAllowancesTableDto) {
        return `This action updates a #${id} employeeAllowancesTable`;
    }
    remove(id) {
        return `This action removes a #${id} employeeAllowancesTable`;
    }
};
exports.EmployeeAllowancesTableService = EmployeeAllowancesTableService;
exports.EmployeeAllowancesTableService = EmployeeAllowancesTableService = __decorate([
    (0, common_1.Injectable)()
], EmployeeAllowancesTableService);
//# sourceMappingURL=employee-allowances-table.service.js.map