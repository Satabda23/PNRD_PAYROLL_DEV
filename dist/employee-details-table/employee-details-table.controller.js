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
exports.EmployeeDetailsTableController = void 0;
const common_1 = require("@nestjs/common");
const employee_details_table_service_1 = require("./employee-details-table.service");
let EmployeeDetailsTableController = class EmployeeDetailsTableController {
    constructor(employeeService) {
        this.employeeService = employeeService;
    }
    findAll(page = 1, limit = 10, districtCode) {
        return this.employeeService.findAll(+page, +limit, districtCode);
    }
};
exports.EmployeeDetailsTableController = EmployeeDetailsTableController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('districtCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], EmployeeDetailsTableController.prototype, "findAll", null);
exports.EmployeeDetailsTableController = EmployeeDetailsTableController = __decorate([
    (0, common_1.Controller)('employee-details-table'),
    __metadata("design:paramtypes", [employee_details_table_service_1.EmployeeDetailsTableService])
], EmployeeDetailsTableController);
//# sourceMappingURL=employee-details-table.controller.js.map