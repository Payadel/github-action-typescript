import * as core from "@actions/core";
import {getInputs, IInputs} from "../src/inputs";

jest.mock("@actions/core");

export function mockGetInput(
    name: string,
    whoToGreat: string,
    options?: core.InputOptions | undefined
) {
    let result: string;
    switch (name.toLowerCase()) {
        case "who-to-great":
            result = whoToGreat;
            break;
        default:
            result = '';
            break;
    }
    if (options && options.required && !result)
        throw new Error(`Input required and not supplied: ${name}`)
    if (options && options.trimWhitespace)
        result = result.trim();
    return result;
}

describe("getInputs", () => {
    it("should return the input nameToGreet from the action", async () => {
        const inputNameToGreet = "Payadel";
        jest.spyOn(core, "getInput").mockImplementation((name: string, options?: core.InputOptions | undefined) =>
            mockGetInput(name, inputNameToGreet, options)
        );

        const inputs: IInputs = await getInputs();

        expect(Object.keys(inputs).length).toBe(1);
        expect(inputs.nameToGreet).toBe(inputNameToGreet);
    });

    it("give invalid input, should reject promise", async () => {
        jest.spyOn(core, "getInput").mockImplementation((name: string, options?: core.InputOptions | undefined) =>
            mockGetInput(name, "", options)
        );
        await expect(getInputs()).rejects.toThrow("Input required and not supplied: who-to-great");

        jest.spyOn(core, "getInput").mockImplementation((name: string, options?: core.InputOptions | undefined) =>
            mockGetInput(name, "   ", options)
        );
        await expect(getInputs()).rejects.toThrow("The name-to-great param is required.");
    });

    it("name must be trim", async () => {
        const inputNameToGreet = "Payadel";
        jest.spyOn(core, "getInput").mockImplementation((name: string, options?: core.InputOptions | undefined) =>
            mockGetInput(name, `    ${inputNameToGreet}    `, options)
        );

        const inputs: IInputs = await getInputs();

        expect(Object.keys(inputs).length).toBe(1);
        expect(inputs.nameToGreet).toBe(inputNameToGreet);
    });
});
