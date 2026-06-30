import { FileReader } from "../src/utils/FileReader";

describe("FileReader", () => {
    test("should create FileReader object", () => {
        const reader = new FileReader();

        expect(reader).toBeDefined();
    });
});