import { promises as fs } from "fs";

export class FileReader {

    async readFile(filePath: string): Promise<string> {

        try {
            const data = await fs.readFile(filePath, "utf-8");
            return data;
        } catch (error) {
            throw new Error("Unable to read the CSV file.");
        }

    }

}