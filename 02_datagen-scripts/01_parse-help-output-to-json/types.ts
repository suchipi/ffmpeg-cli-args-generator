export type AnyUserDataMap = {
  general: {
    section: any;
    option: any;
  };
  coder: {
    section: any;
    option: any;
    optionChild: any;
  };
};

export type DefaultUserDataMap = {
  general: {
    section: undefined;
    option: undefined;
  };
  coder: {
    section: undefined;
    option: undefined;
    optionChild: undefined;
  };
};

export type HelpOutput<
  UserDataMap extends AnyUserDataMap = DefaultUserDataMap
> = {
  preamble: Preamble;
  generalSections: Array<GeneralSection<UserDataMap>>;
  coderSections: Array<CoderSection<UserDataMap>>;
};

export type Preamble = Partial<{
  version: string;
  builtWith: string;
  buildConfiguration: Array<string>;
  avcodecBuildConfiguration: Array<string>;
  libraryVersions: {
    [libraryName: string]: [string, string];
  };
}>;

export type GeneralSection<
  UserDataMap extends AnyUserDataMap = DefaultUserDataMap
> = {
  name: string;
  options: Array<GeneralOption<UserDataMap>>;
  userData: UserDataMap["general"]["section"];
};

export type GeneralOption<
  UserDataMap extends AnyUserDataMap = DefaultUserDataMap
> = {
  name: string;
  usage: string;
  description: string;
  args: Array<string>;
  userData: UserDataMap["general"]["option"];
};

export type CoderSection<
  UserDataMap extends AnyUserDataMap = DefaultUserDataMap
> = {
  name: string;
  type: "encoder" | "decoder" | "bsf" | "other";
  options: Array<CoderOption<UserDataMap>>;
  userData: UserDataMap["coder"]["section"];
};

export type CoderOption<
  UserDataMap extends AnyUserDataMap = DefaultUserDataMap
> = {
  name: string;
  type: string;
  description: string;
  contexts: Array<string>;
  children: Array<CoderOptionChild<UserDataMap>>;
  userData: UserDataMap["coder"]["option"];
};

export type CoderOptionChild<
  UserDataMap extends AnyUserDataMap = DefaultUserDataMap
> = {
  name: string;
  description: string;
  contexts: Array<string>;
  userData: UserDataMap["coder"]["optionChild"];
};
