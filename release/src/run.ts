import * as core from "@actions/core";
import { ensureInputsValid, getInputs } from "./inputs";
import { setOutputs } from "./outputs";
// import * as github from "@actions/github";
// import * as exec from "@actions/exec";

const run = (): Promise<void> =>
    _mainProcess()
        .then(() => core.info("Operation completed successfully."))
        .catch(error => {
            core.error("Operation failed.");
            core.setFailed(
                error instanceof Error ? error.message : error.toString()
            );
        });

export default run;

function _mainProcess(): Promise<void> {
    return getInputs().then(inputs =>
        ensureInputsValid(inputs).then(() => {
            core.debug(`who-to-great: ${inputs.nameToGreet}`);

            const helloMessage = `Hello ${inputs.nameToGreet}!`;
            core.info(helloMessage);

            setOutputs({ "hello-message": helloMessage });

            // Get the JSON webhook payload for the event that triggered the workflow
            // const payload = JSON.stringify(github.context.payload, undefined, 2);
            // core.info(`The event payload: ${payload}`);
        })
    );
}
