import * as core from "@actions/core";
import { getInputs, IInputs } from "../src/inputs";
import { mockGetInput } from "./mocks.utility";

jest.mock("@actions/core");

describe("getInputs", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should return the input nameToGreet from the action", async () => {
        const inputNameToGreet = "Payadel";
        jest.spyOn(core, "getInput").mockImplementation(
            (name: string, options?: core.InputOptions | undefined) =>
                mockGetInput(
                    name,
                    { "who-to-great": inputNameToGreet },
                    options
                )
        );

        const inputs: IInputs = await getInputs();

        expect(Object.keys(inputs).length).toBe(1);
        expect(inputs.nameToGreet).toBe(inputNameToGreet);
    });

    it("give invalid input, should reject promise", async () => {
        jest.spyOn(core, "getInput").mockImplementation(
            (name: string, options?: core.InputOptions | undefined) =>
                mockGetInput(name, { "who-to-great": "" }, options)
        );
        await expect(getInputs()).rejects.toThrow(
            "Input required and not supplied: who-to-great"
        );
    });

    it("name must be trim", async () => {
        const inputNameToGreet = "Payadel";
        jest.spyOn(core, "getInput").mockImplementation(
            (name: string, options?: core.InputOptions | undefined) =>
                mockGetInput(
                    name,
                    { "who-to-great": `    ${inputNameToGreet}    ` },
                    options
                )
        );

        const inputs: IInputs = await getInputs();

        expect(Object.keys(inputs).length).toBe(1);
        expect(inputs.nameToGreet).toBe(inputNameToGreet);
    });
});
