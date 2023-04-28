import {getInputOrDefault} from "./utility";

export interface IInputs {
    nameToGreet: string;
}

export const getInputs = (): Promise<IInputs> =>
    new Promise<IInputs>(resolve => {
        const nameToGreet = getInputOrDefault("who-to-great", "", true, true);
        if (!nameToGreet)
            throw new Error("The name-to-great param is required.");

        return resolve({
            nameToGreet,
        });
    });
