"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Imports the class that reads the CSV file
const FileReader_1 = require("./utils/FileReader");
//Imports the class that converts CSV text into Row objects
const CSVParser_1 = require("./parser/CSVParser");
//Imports the class that checks whether the data is valid
const Validator_1 = require("./validator/Validator");
//Creates an object that can call the readFile() method
const reader = new FileReader_1.FileReader();
//Creates an object that can call the parse() method
const parser = new CSVParser_1.CSVParser();
//Creates an object that can call the validate() method
const validator = new Validator_1.Validator();
async function main() {
    const csvData = await reader.readFile("sample.csv");
    const rows = parser.parse(csvData);
    console.log(rows);
    const errors = validator.validate(rows);
    if (errors.length > 0) {
        console.log("Validation Errors:");
        console.log(errors);
    }
    else {
        console.log("CSV imported successfully!");
        console.log(rows);
    }
}
main().catch(console.error);
//# sourceMappingURL=index.js.map