import {
  HelpOutput,
  CoderSection,
  GeneralSection,
  CoderOption,
  CoderOptionChild,
  GeneralOption,
} from "../01_parse-help-output-to-json/types";
import * as changeCase from "change-case";
import { replace } from "./replacements";

type UserDataMap = {
  general: {
    section: {
      varName: string;
    };
    option: {
      varName: string;
    };
  };
  coder: {
    section: {
      varName: string;
    };
    option: {
      varName: string;
    };
    optionChild: {
      varName: string;
    };
  };
};

export function annotateHelpOutput(
  helpOutput: HelpOutput
): HelpOutput<UserDataMap> {
  // TODO: run replace on everything all the way up, instead of doing stuff by hand here
  return {
    ...helpOutput,
    generalSections: helpOutput.generalSections.map(
      (section): GeneralSection<UserDataMap> => {
        return replace({
          ...section,
          userData: {
            varName: replace(changeCase.pascalCase(section.name)),
          },
          options: section.options.map((option): GeneralOption<UserDataMap> => {
            return replace({
              ...option,
              args: option.args.map(replace),
              userData: {
                varName: replace(changeCase.camelCase(option.name)),
              },
            });
          }),
        });
      }
    ),
    coderSections: helpOutput.coderSections.map(
      (section): CoderSection<UserDataMap> => {
        const baseName = section.name
          .replace(/[\s_]*(encoder|decoder|bsf)/gi, "")
          .trim();

        return replace({
          ...section,
          userData: {
            varName: replace(changeCase.pascalCase(baseName)),
          },
          options: section.options.map((option): CoderOption<UserDataMap> => {
            return replace({
              ...option,
              userData: {
                varName: replace(changeCase.camelCase(option.name)),
              },
              children: option.children.map(
                (child): CoderOptionChild<UserDataMap> => {
                  return replace({
                    ...child,
                    userData: {
                      varName: replace(
                        changeCase.snakeCase(child.name).toUpperCase()
                      ),
                    },
                  });
                }
              ),
            });
          }),
        });
      }
    ),
  };
}
