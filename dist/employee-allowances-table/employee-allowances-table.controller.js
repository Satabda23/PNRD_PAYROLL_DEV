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
exports.EmployeeAllowancesTableController = void 0;
const common_1 = require("@nestjs/common");
const employee_allowances_table_service_1 = require("./employee-allowances-table.service");
const create_employee_allowances_table_dto_1 = require("./dto/create-employee-allowances-table.dto");
const update_employee_allowances_table_dto_1 = require("./dto/update-employee-allowances-table.dto");
let EmployeeAllowancesTableController = class EmployeeAllowancesTableController {
    constructor(employeeAllowancesTableService) {
        this.employeeAllowancesTableService = employeeAllowancesTableService;
    }
    create(createEmployeeAllowancesTableDto) {
        return this.employeeAllowancesTableService.create(createEmployeeAllowancesTableDto);
    }
    findAll() {
        return this.employeeAllowancesTableService.findAll();
    }
    findOne(id) {
        return this.employeeAllowancesTableService.findOne(+id);
    }
    update(id, updateEmployeeAllowancesTableDto) {
        return this.employeeAllowancesTableService.update(+id, updateEmployeeAllowancesTableDto);
    }
    remove(id) {
        return this.employeeAllowancesTableService.remove(+id);
    }
};
exports.EmployeeAllowancesTableController = EmployeeAllowancesTableController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_employee_allowances_table_dto_1.CreateEmployeeAllowancesTableDto]),
    __metadata("design:returntype", void 0)
], EmployeeAllowancesTableController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmployeeAllowancesTableController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeeAllowancesTableController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_employee_allowances_table_dto_1.UpdateEmployeeAllowancesTableDto]),
    __metadata("design:returntype", void 0)
], EmployeeAllowancesTableController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeeAllowancesTableController.prototype, "remove", null);
exports.EmployeeAllowancesTableController = EmployeeAllowancesTableController = __decorate([
    (0, common_1.Controller)('employee-allowances-table'),
    __metadata("design:paramtypes", [employee_allowances_table_service_1.EmployeeAllowancesTableService])
], EmployeeAllowancesTableController);
//# sourceMappingURL=employee-allowances-table.controller.js.map