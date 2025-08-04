"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDistrictsTableDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_districts_table_dto_1 = require("./create-districts-table.dto");
class UpdateDistrictsTableDto extends (0, mapped_types_1.PartialType)(create_districts_table_dto_1.CreateDistrictsTableDto) {
}
exports.UpdateDistrictsTableDto = UpdateDistrictsTableDto;
//# sourceMappingURL=update-districts-table.dto.js.map