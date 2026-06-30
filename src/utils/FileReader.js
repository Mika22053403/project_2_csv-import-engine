"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileReader = void 0;
const fs_1 = require("fs");
class FileReader {
    async readFile(filePath) {
        try {
            const data = await fs_1.promises.readFile(filePath, "utf-8");
            return data;
        }
        catch (error) {
            throw new Error("Unable to read the CSV file.");
        }
    }
}
exports.FileReader = FileReader;
//# sourceMappingURL=FileReader.js.map