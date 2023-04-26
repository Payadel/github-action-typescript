import * as core from "@actions/core";

export interface IInputs {
    nameToGreet: string;
}

export const getInputs = (): Promise<IInputs> =>
    new Promise<IInputs>(resolve => {
        const nameToGreet = getInputOrDefault("who-to-great", null, true, true);
        if(!nameToGreet)
            throw new Error("The name-to-great param is required.")

        return resolve({
            nameToGreet
        });
    });

function getInputOrDefault(name: string, default_value: any = null,
                           trimWhitespace: boolean = false, required: boolean = false): string {
    const input = core.getInput(name, {
        trimWhitespace: trimWhitespace,
        required: required
    });
    if (!input || input === "") return default_value;
    return input;
}
