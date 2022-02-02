import { GeneralOption } from "./types";

export function parseGeneralOption(inputLine: string): GeneralOption {
  const [first = "", second = ""] = inputLine
    .trim()
    .split(/\s{2,99999}|\s*--\s+/g)
    .filter((part) => part.trim().length != 0);
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
    name: flag,
    usage: usage,
    description: description,
    args: args,
    userData: undefined,
  };
}
