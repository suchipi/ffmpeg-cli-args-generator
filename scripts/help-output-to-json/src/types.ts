export type HelpOutput = {
  preamble: Preamble;
  generalSections: Array<GeneralSection>;
  coderSections: Array<CoderSection>;
};

export type Preamble = Partial<{
  version: string;
  builtWith: string;
  buildConfiguration: string;
  avcodecBuildConfiguration: string;
  libraryVersions: {
    [libraryName: string]: [string, string];
  };
}>;

export type GeneralSection = {
  name: string;
  options: Array<GeneralOption>;
};

export type GeneralOption = {
  name: string;
  usage: string;
  description: string;
  args: Array<string>;
};

export type CoderSection = {
  name: string;
  type: "encoder" | "decoder" | "other";
  options: Array<CoderOption>;
};

export type CoderOption = {
  name: string;
  // TODO
};
