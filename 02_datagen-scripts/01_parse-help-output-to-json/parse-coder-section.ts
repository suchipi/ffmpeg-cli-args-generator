import { CoderSection } from "./types";
import { parseCoderOptions } from "./parse-coder-options";

export function parseCoderSection(input: string): CoderSection {
  const [firstLine, ...lines] = input.split("\n").filter(Boolean);

  const matches = firstLine.match(/^[^\s]+[\s_]*(encoder|decoder|bsf)/i);
  let kind = "other";
  if (matches) {
    kind = matches[1] || "other";
  }
  const name = firstLine.replace(/\s*AVOptions:\s*$/i, "");

  const options = parseCoderOptions(lines);

  return {
    is: "CoderSection",
    name,
    type: kind as "encoder" | "decoder" | "bsf" | "other",
    options,
    userData: undefined,
  };
}
