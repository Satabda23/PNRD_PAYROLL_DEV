"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeAllowancesTypeModule = void 0;
const common_1 = require("@nestjs/common");
const employee_allowances_type_service_1 = require("./employee-allowances-type.service");
const employee_allowances_type_controller_1 = require("./employee-allowances-type.controller");
const typeorm_1 = require("@nestjs/typeorm");
const employee_allowances_type_entity_1 = require("./entities/employee-allowances-type.entity");
let EmployeeAllowancesTypeModule = class EmployeeAllowancesTypeModule {
};
exports.EmployeeAllowancesTypeModule = EmployeeAllowancesTypeModule;
exports.EmployeeAllowancesTypeModule = EmployeeAllowancesTypeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([employee_allowances_type_entity_1.EmployeeAllowancesTypeTable])],
        controllers: [employee_allowances_type_controller_1.EmployeeAllowancesTypeController],
        providers: [employee_allowances_type_service_1.EmployeeAllowancesTypeService],
    })
], EmployeeAllowancesTypeModule);
//# sourceMappingURL=employee-allowances-type.module.js.map