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
exports.DistrictsTable = void 0;
const typeorm_1 = require("typeorm");
const employee_details_table_entity_1 = require("../../employee-details-table/entities/employee-details-table.entity");
let DistrictsTable = class DistrictsTable {
};
exports.DistrictsTable = DistrictsTable;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar', length: 10 }),
    __metadata("design:type", String)
], DistrictsTable.prototype, "district_code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DistrictsTable.prototype, "district_name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => employee_details_table_entity_1.EmployeeDetailsTable, (employee) => employee.district),
    __metadata("design:type", Array)
], DistrictsTable.prototype, "employees", void 0);
exports.DistrictsTable = DistrictsTable = __decorate([
    (0, typeorm_1.Entity)('districts')
], DistrictsTable);
//# sourceMappingURL=districts-table.entity.js.map