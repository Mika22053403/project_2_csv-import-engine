"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
class Validator {
    validate(rows) {
        const errors = [];
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            //Name validation
            if (!row.Name.trim()) {
                errors.push(`Row ${i + 2}: Name is required`);
            }
            //Email validation
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row.Email)) {
                errors.push(`Row ${i + 2}: Invalid email`);
            }
            //Age validation
            if (isNaN(Number(row.Age))) {
                errors.push(`Row ${i + 2}: Age must be a number`);
            }
        }
        return errors;
    }
}
exports.Validator = Validator;
//# sourceMappingURL=Validator.js.map