import * as core from "@actions/core";

export function getInputOrDefault(
    name: string,
    default_value = "",
    trimWhitespace = false,
    required = false
): string {
    const input = core.getInput(name, {
        trimWhitespace,
        required,
    });
    if (!input || input === "") return default_value;
    return input;
}

export function getBooleanInputOrDefault(
    name: string,
    defaultValue: boolean,
    required: boolean = false,
): boolean {
    const input = getInputOrDefault(name, "", true, required).toLowerCase();
    if (input === "") return defaultValue;
    if (input === "true") return true;
    if (input === "false") return false;
    throw new TypeError(`The value of ${name} is not valid. It must be either true or false but got ${input}`);
}
