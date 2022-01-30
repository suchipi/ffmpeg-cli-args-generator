import { GeneralOption, GeneralSection } from "./types";
import { parseGeneralOption } from "./parse-general-option";

export function parseGeneralSection(input: string): GeneralSection {
  const [firstLine, ...lines] = input.split("\n");

  const options: Array<GeneralOption> = lines.filter(Boolean).map((line) => {
    return parseGeneralOption(line);
  });

  return {
    name: firstLine,
    options,
  };
}
