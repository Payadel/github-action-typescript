import run from "../src/run";
import * as core from "@actions/core";
import { mockGetInput } from "./mocks.utility";

jest.mock("@actions/core");

describe("run", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("must output a hello message with the correct name and set it as an output", async () => {
        // Arrange
        const expectedName = "Payadel";
        const debugMock = jest.spyOn(core, "debug");
        const infoMock = jest.spyOn(core, "info");
        const setOutputMock = jest.spyOn(core, "setOutput");
        const errorMock = jest.spyOn(core, "error");
        const setFailedMock = jest.spyOn(core, "setFailed");
        jest.spyOn(core, "getInput").mockImplementation(
            (name: string, options?: core.InputOptions | undefined) =>
                mockGetInput(name, { "who-to-great": expectedName }, options)
        );

        // Act
        await run();

        // Assert
        expect(debugMock).toHaveBeenCalledWith(`who-to-great: ${expectedName}`);
        expect(infoMock).toHaveBeenCalledWith(`Hello ${expectedName}!`);
        expect(setOutputMock).toHaveBeenCalledWith(
            "hello-message",
            `Hello ${expectedName}!`
        );

        expect(errorMock).not.toHaveBeenCalled();
        expect(setFailedMock).not.toHaveBeenCalled();
    });

    it("must getInputs fails and error catch", async () => {
        // Arrange
        const debugMock = jest.spyOn(core, "debug");
        const infoMock = jest.spyOn(core, "info");
        const setOutputMock = jest.spyOn(core, "setOutput");
        const errorMock = jest.spyOn(core, "error");
        const setFailedMock = jest.spyOn(core, "setFailed");
        jest.spyOn(core, "getInput").mockImplementation(
            (name: string, options?: core.InputOptions | undefined) =>
                mockGetInput(name, { "who-to-great": "" }, options)
        );

        // Act
        await run();

        // Assert
        expect(debugMock).not.toHaveBeenCalled();
        expect(infoMock).not.toHaveBeenCalled();
        expect(setOutputMock).not.toHaveBeenCalled();

        expect(errorMock).toHaveBeenCalledWith("Operation failed.");
        expect(setFailedMock).toHaveBeenCalledWith(
            "Input required and not supplied: who-to-great"
        );
    });
});
