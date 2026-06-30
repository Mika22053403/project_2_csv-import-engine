import { Row } from "../models/Row";

export class CSVParser {

    parse(csvData: string): Row[] {

        const lines = csvData.trim().split("\n");

        // Remove extra spaces and '\r' from every header
        const headers = lines[0]!.split(",").map(header => header.trim());

        const rows: Row[] = [];

        for (let i = 1; i < lines.length; i++) {

            const values = lines[i]!.split(",");
            const row: Row = {} as Row;

            for (let j = 0; j < headers.length; j++) {

                const header = headers[j]!;
                const value = values[j]?.trim() ?? "";

                (row as any)[header] = value;
            }

            rows.push(row);   //  Add completed row

        }

        return rows;          //  Return after processing all rows

    }

}