import { CoderSection, GeneralSection } from "./types";
import { replacements } from "./replacements";

export function applyReplacementsToGeneralSection(
  section: GeneralSection
): GeneralSection {
  const options = section.options.map((option) => {
    return {
      ...option,
      name:
        replacements[option.usage] || replacements[option.name] || option.name,
      args: (replacements["args: " + option.usage] || option.args).map(
        (arg: string) => replacements[arg] || arg
      ),
    };
  });

  return {
    name: replacements[section.name] || section.name,
    options,
  };
}

export function applyReplacementsToCoderSection(
  section: CoderSection
): CoderSection {
  return section;
}
