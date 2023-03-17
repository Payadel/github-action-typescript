import * as core from "@actions/core";
import * as github from "@actions/github";
import { wait } from "./wait";

async function run(): Promise<void> {
  try {
    const nameToGreet: string = core.getInput("who-to-greet");
    const ms: string = core.getInput("milliseconds");

    core.debug(`Waiting ${ms} milliseconds ...`); // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true
    core.debug(new Date().toTimeString());
    await wait(parseInt(ms, 10));
    core.debug(new Date().toTimeString());

    core.info(`Hello ${nameToGreet}!`);
    core.setOutput("time", new Date().toTimeString());

    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    core.info(`The event payload: ${payload}`);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
