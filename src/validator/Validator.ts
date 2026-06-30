import { Row } from "../models/Row";

export class Validator {

    validate(rows: Row[]): string[] {

        const errors: string[] = [];

        for (let i = 0; i < rows.length; i++) {

            const row = rows[i]!;
             
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