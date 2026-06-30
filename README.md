# CSV Import Engine

## Project Overview

The CSV Import Engine is a TypeScript application that reads data from a CSV file, converts it into structured objects, validates the data, and reports any validation errors.

The project is designed using object-oriented programming principles with separate classes for file reading, CSV parsing, and data validation.

---

## Features

* Read CSV files
* Parse CSV data into TypeScript objects
* Validate Name, Email, and Age fields
* Display validation errors
* Unit testing using Jest
* Clean and modular project structure

---

## Project Structure

```
src/
 ├── models/
 │    └── Row.ts
 ├── parser/
 │    └── CSVParser.ts
 ├── utils/
 │    └── FileReader.ts
 ├── validator/
 │    └── Validator.ts
 └── index.ts

tests/
 ├── CSVParser.test.ts
 ├── Validator.test.ts
 └── FileReader.test.ts
```

---

## Technologies Used

* TypeScript
* Node.js
* Jest
* ts-jest

---

## Installation

```bash
npm install
```

---

## Run the Project

```bash
npx ts-node src/index.ts
```

---

## Run Unit Tests

```bash
npm test
```

---

## Design Decisions

* Used separate classes to maintain Single Responsibility Principle (SRP).
* Used interfaces to define the structure of CSV rows.
* Validation logic is separated from parsing logic.
* File reading is isolated from business logic.

---

## Assumptions

* CSV file contains the columns: Name, Email, Age.
* Values are comma-separated.
* First row contains column headers.
* Email must follow a valid email format.
* Age should contain only numeric values.

---

## Example Input

```
Name,Email,Age
John,john@test.com,25
Jane,jane@test.com,30
Mike,mike,40
Sara,sara@test.com,abc
,alex@test.com,20
```

---

## Example Output

```
Validation Errors:
Row 4: Invalid email
Row 5: Age must be a number
Row 6: Name is required
```
