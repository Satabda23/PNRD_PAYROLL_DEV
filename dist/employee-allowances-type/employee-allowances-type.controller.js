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
exports.EmployeeAllowancesTypeController = void 0;
const common_1 = require("@nestjs/common");
const employee_allowances_type_service_1 = require("./employee-allowances-type.service");
const create_employee_allowances_type_dto_1 = require("./dto/create-employee-allowances-type.dto");
const update_employee_allowances_type_dto_1 = require("./dto/update-employee-allowances-type.dto");
let EmployeeAllowancesTypeController = class EmployeeAllowancesTypeController {
    constructor(employeeAllowancesTypeService) {
        this.employeeAllowancesTypeService = employeeAllowancesTypeService;
    }
    create(createEmployeeAllowancesTypeDto) {
        return this.employeeAllowancesTypeService.create(createEmployeeAllowancesTypeDto);
    }
    findAll() {
        return this.employeeAllowancesTypeService.findAll();
    }
    findOne(id) {
        return this.employeeAllowancesTypeService.findOne(id);
    }
    update(id, updateEmployeeAllowancesTypeDto) {
        return this.employeeAllowancesTypeService.update(+id, updateEmployeeAllowancesTypeDto);
    }
    remove(id) {
        return this.employeeAllowancesTypeService.remove(+id);
    }
};
exports.EmployeeAllowancesTypeController = EmployeeAllowancesTypeController;
__decorate([
    (0, common_1.Post)('add-new-allowance-type'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_employee_allowances_type_dto_1.CreateEmployeeAllowancesTypeDto]),
    __metadata("design:returntype", void 0)
], EmployeeAllowancesTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmployeeAllowancesTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EmployeeAllowancesTypeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id/update'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_employee_allowances_type_dto_1.UpdateEmployeeAllowancesTypeDto]),
    __metadata("design:returntype", void 0)
], EmployeeAllowancesTypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EmployeeAllowancesTypeController.prototype, "remove", null);
exports.EmployeeAllowancesTypeController = EmployeeAllowancesTypeController = __decorate([
    (0, common_1.Controller)('employee-allowances-type'),
    __metadata("design:paramtypes", [employee_allowances_type_service_1.EmployeeAllowancesTypeService])
], EmployeeAllowancesTypeController);
//# sourceMappingURL=employee-allowances-type.controller.js.map