export type OptionScope = "INPUT" | "OUTPUT" | "STREAM" | "GLOBAL" | "UNKNOWN";

export type Fragment<Scope extends OptionScope> =
  | string & { __type: "Fragment"; __scope: Scope };

export type Option<
  Scope extends OptionScope = "UNKNOWN",
  Args extends Array<any> = []
> = (...args: Args) => Fragment<Scope>;

export const opt =
  <Scope extends OptionScope = "UNKNOWN">(scope: Scope) =>
  <Args extends Array<any> = []>(
    flag: string,
    build: (...args: Args) => Array<string> = () => [flag]
  ): Option<Scope, Args> => {
    // @ts-ignore
    return build;
  };
