import { wait } from "../src/wait";
import * as process from "process";
import * as cp from "child_process";
import * as path from "path";
import { expect, test } from "@jest/globals";

test("throws invalid number", async () => {
  const input = parseInt("foo", 10);
  await expect(wait(input)).rejects.toThrow("milliseconds not a number");
});

test("wait 500 ms", async () => {
  const start = new Date();
  await wait(500);
  const end = new Date();
  let delta = Math.abs(end.getTime() - start.getTime());
  expect(delta).toBeGreaterThan(450);
});