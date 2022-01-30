import fs from "fs";
import path from "path";
import vm from "vm";
import * as t from "serializable-types";
import deepExtend from "deep-extend";
import set from "lodash/set";
import rfdc from "rfdc";

const clone = rfdc();

function run(js: string, scope: any = {}) {
  const ctx = vm.createContext({ ...global, ...scope });
  return vm.runInContext(js, ctx);
}

const replacementsText = fs.readFileSync(
  path.join(__dirname, "replacements.txt"),
  "utf-8"
);

const lines = replacementsText
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean);

const replacements: Array<[t.TypeDef<any>, any]> = [];

const MERGE = Symbol("MERGE");
function makeMerge(obj) {
  return { [MERGE]: true, obj };
}

const SET = Symbol("SET");
function makeSet(path, value) {
  return { [SET]: true, path, value };
}

for (const line of lines) {
  const results = line.split("-->").map((part) => part.trim());
  if (results.length !== 2) {
    throw new Error(`Unexpected line: ${line}`);
  }
  const [first, second] = results;

  const input = run(first, { t });
  const output = run(second, { input, merge: makeMerge, set: makeSet });

  replacements.push([t.coerceToType(input), output]);
}

export function replace(value: any) {
  let currentValue = value;

  for (const [type, substitute] of replacements) {
    if (t.isOfType(value, type)) {
      if (substitute[MERGE]) {
        currentValue = deepExtend(clone(value), substitute.obj);
      } else if (substitute[SET]) {
        const valClone = clone(value);
        set(valClone, substitute.path, substitute.value);
        currentValue = valClone;
      } else {
        currentValue = substitute;
      }
    }
  }
  return currentValue;
}
