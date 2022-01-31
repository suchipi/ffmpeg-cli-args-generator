import { HelpOutput } from "../01_parse-help-output-to-json/types";
import { camelCase, pascalCase, snakeCase } from "change-case";
import { makeBidoof, modify } from "bidoof";
import * as is from "./matchers";
import traverse from "@suchipi/traverse";
import { set } from "lodash";
import { produce } from "immer";

export type UserDataMap = {
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

function addVarName(someCase) {
  return modify((obj) => {
    obj.userData = obj.userData || {};
    obj.userData.varName = someCase(obj.name);
  });
}

const bidoof = makeBidoof([
  is.GeneralSection,
  addVarName(pascalCase),

  is.GeneralOption,
  addVarName(camelCase),

  is.CoderSection,
  addVarName(pascalCase),

  is.CoderOption,
  addVarName(pascalCase),

  is.CoderOptionChild,
  addVarName((name: string) => snakeCase(name).toUpperCase()),
]);

export function addUserData(helpOutput: HelpOutput): HelpOutput<UserDataMap> {
  const result = produce(helpOutput, (draft) => {
    traverse(draft, (value, path) => {
      const newValue = bidoof(value);
      if (value !== newValue) {
        set(draft, path, newValue);
      }
    });
  });

  return result as any;
}
