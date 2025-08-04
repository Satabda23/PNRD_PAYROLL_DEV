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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeDetailsTable = void 0;
const districts_table_entity_1 = require("../../districts-table/entities/districts-table.entity");
const typeorm_1 = require("typeorm");
let EmployeeDetailsTable = class EmployeeDetailsTable {
};
exports.EmployeeDetailsTable = EmployeeDetailsTable;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EmployeeDetailsTable.prototype, "employee_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EmployeeDetailsTable.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EmployeeDetailsTable.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EmployeeDetailsTable.prototype, "program_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EmployeeDetailsTable.prototype, "employee_code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EmployeeDetailsTable.prototype, "home_town", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], EmployeeDetailsTable.prototype, "date_of_joining", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], EmployeeDetailsTable.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => districts_table_entity_1.DistrictsTable, (district) => district.employees),
    (0, typeorm_1.JoinColumn)({ name: 'district_code', referencedColumnName: 'district_code' }),
    __metadata("design:type", districts_table_entity_1.DistrictsTable)
], EmployeeDetailsTable.prototype, "district", void 0);
exports.EmployeeDetailsTable = EmployeeDetailsTable = __decorate([
    (0, typeorm_1.Entity)('employees')
], EmployeeDetailsTable);
//# sourceMappingURL=employee-details-table.entity.js.map