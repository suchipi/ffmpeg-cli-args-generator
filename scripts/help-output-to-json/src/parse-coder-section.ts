import { CoderOption, CoderSection } from "./types";
import { parseCoderOption } from "./parse-coder-option";

export function parseCoderSection(input: string): CoderSection {
  const [firstLine, ...lines] = input.split("\n").filter(Boolean);

  // const options: Array<CoderOption> = lines.map((line) => {
  //   return parseCoderOption(line as CoderOptionString);
  // });

  const matchRegex = /[\s_]*(encoder|decoder)?\s*AVOptions:\s*$/i;
  const matches = firstLine.match(matchRegex);
  let kind = "other";
  if (matches) {
    kind = matches[1] || "other";
  }
  const name = firstLine.replace(matchRegex, "");

  return {
    name,
    type: kind as "encoder" | "decoder" | "other",
    options: ["TODO"],
  };
}
