import { HelpOutput } from "../01_parse-help-output-to-json/types";
import { camelCase, pascalCase, snakeCase } from "change-case";
import { makeMapperFunction, modify } from "bidoof";
import { walk } from "bibarel";
import * as is from "./matchers";

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
  return modify.mutate((obj) => {
    obj.userData = obj.userData || {};
    obj.userData.varName = someCase(obj.name);
  });
}

const addVarNames = makeMapperFunction([
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
  return walk.mutate(helpOutput, addVarNames);
}
