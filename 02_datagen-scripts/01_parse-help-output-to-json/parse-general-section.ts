import { GeneralOption, GeneralSection } from "./types";
import { parseGeneralOption } from "./parse-general-option";

export function parseGeneralSection(input: string): GeneralSection {
  const [firstLine, ...lines] = input.split("\n");

  const options: Array<GeneralOption> = lines
    .filter(Boolean)
    .filter(
      (line) =>
        line.trim() !==
        "See man ffmpeg for detailed description of the options."
    )
    .map((line) => {
      return parseGeneralOption(line);
    });

  return {
    is: "GeneralSection",
    name: firstLine,
    options,
    userData: undefined,
  };
}
