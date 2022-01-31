import * as changeCase from "change-case";
import { GeneralOption } from "./types";

export function parseGeneralOption(inputLine: string): GeneralOption {
  const [first = "", second = ""] = inputLine.split(/\s{2,99999}|\s+--\s+/);
  const flag = first.split(/\s/)[0].trim();
  const description = second.trim();
  const usage = first.trim();

  const argsString =
    flag === usage ? "" : usage.replace(new RegExp("^" + flag + "\\s"), "");
  const args = argsString
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.trim());

  return {
    is: "GeneralOption",
    name: changeCase.pascalCase(flag),
    usage: usage,
    description: description,
    args: args.map((arg) => changeCase.camelCase(arg)),
    userData: undefined,
  };
}
