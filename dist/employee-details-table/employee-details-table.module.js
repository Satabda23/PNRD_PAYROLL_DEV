"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeDetailsTableModule = void 0;
const common_1 = require("@nestjs/common");
const employee_details_table_service_1 = require("./employee-details-table.service");
const employee_details_table_controller_1 = require("./employee-details-table.controller");
const typeorm_1 = require("@nestjs/typeorm");
const employee_details_table_entity_1 = require("./entities/employee-details-table.entity");
let EmployeeDetailsTableModule = class EmployeeDetailsTableModule {
};
exports.EmployeeDetailsTableModule = EmployeeDetailsTableModule;
exports.EmployeeDetailsTableModule = EmployeeDetailsTableModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([employee_details_table_entity_1.EmployeeDetailsTable])],
        controllers: [employee_details_table_controller_1.EmployeeDetailsTableController],
        providers: [employee_details_table_service_1.EmployeeDetailsTableService],
    })
], EmployeeDetailsTableModule);
//# sourceMappingURL=employee-details-table.module.js.map