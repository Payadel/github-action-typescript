import { getInputOrDefault } from "./utility";
import { DEFAULT_INPUTS } from "./configs";

export interface IInputs {
    nameToGreet: string;
}

export const getInputs = (): Promise<IInputs> =>
    new Promise<IInputs>(resolve =>
        resolve({
            nameToGreet:
                getInputOrDefault("who-to-great", undefined, true, true) ??
                DEFAULT_INPUTS.nameToGreet,
        })
    );

export function ensureInputsValid(inputs: IInputs): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        return inputs.nameToGreet
            ? resolve()
            : reject(new Error("The 'who-to-great' parameter is required."));
    });
}
