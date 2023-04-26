import * as core from "@actions/core";
import {getInputs} from "./inputs";
// import * as github from "@actions/github";
// import * as exec from "@actions/exec";

const run = (): Promise<void> =>
    getInputs()
        .then(inputs => {
            core.debug(`who-to-great: ${inputs.nameToGreet}`);

            const hello_message = `Hello ${inputs.nameToGreet}!`;
            core.info(hello_message);
            core.setOutput("hello-message", hello_message);

            // Get the JSON webhook payload for the event that triggered the workflow
            // const payload = JSON.stringify(github.context.payload, undefined, 2);
            // core.info(`The event payload: ${payload}`);
        })
        .then(() => core.info("Operation completed successfully."))
        .catch(error => {
            core.error("Operation failed.");
            core.setFailed(
                error instanceof Error ? error.message : error.toString()
            );
        });

export default run;

// async function execBashCommand(command: string): Promise<exec.ExecOutput> {
//   return exec.getExecOutput(`/bin/bash -c "${command}"`);
// }
