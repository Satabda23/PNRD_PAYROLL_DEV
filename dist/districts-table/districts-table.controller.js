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
exports.DistrictsTableController = void 0;
const common_1 = require("@nestjs/common");
const districts_table_service_1 = require("./districts-table.service");
const create_districts_table_dto_1 = require("./dto/create-districts-table.dto");
const update_districts_table_dto_1 = require("./dto/update-districts-table.dto");
let DistrictsTableController = class DistrictsTableController {
    constructor(districtsTableService) {
        this.districtsTableService = districtsTableService;
    }
    create(createDistrictsTableDto) {
        return this.districtsTableService.create(createDistrictsTableDto);
    }
    findAll() {
        return this.districtsTableService.findAll();
    }
    findOne(id) {
        return this.districtsTableService.findOne(+id);
    }
    update(id, updateDistrictsTableDto) {
        return this.districtsTableService.update(+id, updateDistrictsTableDto);
    }
    remove(id) {
        return this.districtsTableService.remove(+id);
    }
};
exports.DistrictsTableController = DistrictsTableController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_districts_table_dto_1.CreateDistrictsTableDto]),
    __metadata("design:returntype", void 0)
], DistrictsTableController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DistrictsTableController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DistrictsTableController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_districts_table_dto_1.UpdateDistrictsTableDto]),
    __metadata("design:returntype", void 0)
], DistrictsTableController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DistrictsTableController.prototype, "remove", null);
exports.DistrictsTableController = DistrictsTableController = __decorate([
    (0, common_1.Controller)('districts-table'),
    __metadata("design:paramtypes", [districts_table_service_1.DistrictsTableService])
], DistrictsTableController);
//# sourceMappingURL=districts-table.controller.js.map