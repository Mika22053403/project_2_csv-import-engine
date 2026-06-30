import { Validator } from "../src/validator/Validator";

describe("Validator", () => {
    test("should validate invalid data", () => {
        const validator = new Validator();

        const rows = [
            {
                Name: "",
                Email: "wrongemail",
                Age: "abc"
            }
        ];

        const errors = validator.validate(rows);

        expect(errors.length).toBe(3);
    });
});