//Imports the class that reads the CSV file
import { FileReader } from "./utils/FileReader";

//Imports the class that converts CSV text into Row objects
import { CSVParser } from "./parser/CSVParser";

//Imports the class that checks whether the data is valid
import { Validator } from "./validator/Validator";

//Creates an object that can call the readFile() method
const reader = new FileReader();

//Creates an object that can call the parse() method
const parser = new CSVParser();

//Creates an object that can call the validate() method
const validator = new Validator();

async function main() {
    const csvData = await reader.readFile("sample.csv");
    const rows = parser.parse(csvData);
    console.log(rows);
    
    const errors = validator.validate(rows);

    if (errors.length > 0) {

    console.log("Validation Errors:");

    console.log(errors);

} else {

    console.log("CSV imported successfully!");

    console.log(rows);

}

}

main().catch(console.error);