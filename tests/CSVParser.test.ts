import { CSVParser } from "../src/parser/CSVParser";

describe("CSVParser", () => {
    test("should parse CSV correctly", () => {
        const parser = new CSVParser();

        const csv = `Name,Email,Age
John,john@test.com,25`;

        const rows = parser.parse(csv);

        expect(rows.length).toBe(1);

        expect(rows[0]).toEqual({
            Name: "John",
            Email: "john@test.com",
            Age: "25"
        });
    });
});