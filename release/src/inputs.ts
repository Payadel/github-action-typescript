import {getInputOrDefault} from "./utility";
import {DEFAULT_INPUTS} from "./configs";

export interface IInputs {
    nameToGreet: string;
}

export const getInputs = (): Promise<IInputs> =>
    new Promise<IInputs>(resolve => {
        const nameToGreet = getInputOrDefault("who-to-great", DEFAULT_INPUTS.nameToGreet, true, true);
        if (!nameToGreet)
            throw new Error("The name-to-great param is required.");

        return resolve({
            nameToGreet,
        });
    });
