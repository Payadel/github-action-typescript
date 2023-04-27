import * as core from "@actions/core";

export interface IOutputs {
    helloMessage: string;
}

export function setOutputs(data: IOutputs): void{
    core.setOutput("hello-message", data.helloMessage);
}
