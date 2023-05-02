import * as core from "@actions/core";
import { IActionOutputs, setOutputs } from "../src/outputs";

jest.mock("@actions/core");

describe("setOutputs", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should set all outputs", () => {
        const data: IActionOutputs = {
            "hello-message": "hello",
        };

        jest.spyOn(core, "setOutput");

        setOutputs(data);

        for (let key of Object.keys(data))
            expect(core.setOutput).toHaveBeenCalledWith(key, data[key]);
    });
});
