"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVParser = void 0;
class CSVParser {
    parse(csvData) {
        const lines = csvData.trim().split("\n");
        // Remove extra spaces and '\r' from every header
        const headers = lines[0].split(",").map(header => header.trim());
        const rows = [];
        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(",");
            const row = {};
            for (let j = 0; j < headers.length; j++) {
                const header = headers[j];
                const value = values[j]?.trim() ?? "";
                row[header] = value;
            }
            rows.push(row); //  Add completed row
        }
        return rows; //  Return after processing all rows
    }
}
exports.CSVParser = CSVParser;
//# sourceMappingURL=CSVParser.js.map