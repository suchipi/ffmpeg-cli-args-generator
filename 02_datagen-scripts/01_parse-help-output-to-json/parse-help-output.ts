import { HelpOutput } from "./types";
import { splitIntoChunks } from "./split-into-chunks";
import { parsePreamble } from "./parse-preamble";
import { parseGeneralSection } from "./parse-general-section";
import { parseCoderSection } from "./parse-coder-section";

export function parseHelpOutput(helpOutput: string): HelpOutput {
  const lines = helpOutput.split("\n");

  const preamblePart = lines.slice(0, 17).join("\n");
  const generalPart = lines.slice(17, 236).join("\n");
  const coderPart = lines.slice(236).join("\n");

  const preamble = parsePreamble(preamblePart);

  const generalSections = splitIntoChunks(generalPart).map(parseGeneralSection);

  const coderSections = splitIntoChunks(coderPart).map(parseCoderSection);

  return {
    preamble,
    generalSections,
    coderSections,
  };
}
