import { HelpOutput } from "../01_parse-help-output-to-json/types";
import { addUserData, UserDataMap } from "./add-userdata";
import { applyReplacements } from "./apply-replacements";

export function patchHelpJson(helpJson: HelpOutput): HelpOutput<UserDataMap> {
  const withUserData = addUserData(helpJson);
  const withReplacements = applyReplacements(withUserData);
  return withReplacements;
}
