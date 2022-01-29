import { make as makeArgv, opts, Fragment, Option, OptionScope } from "./argv";

export { makeArgv, opts, Fragment, Option, OptionScope };

export type Stream<Scope extends OptionScope> = {
  scope: Scope;
  path: string;
  options: Array<Fragment<Scope>>;
};

export type InputStreamOption =
  | Fragment<"INPUT" | "STREAM">
  | Option<"INPUT" | "STREAM", []>;

export type OutputStreamOption =
  | Fragment<"OUTPUT" | "STREAM">
  | Option<"OUTPUT" | "STREAM", []>;

export function input(
  pathOrUrl: string,
  ...options: Array<InputStreamOption>
): Stream<"INPUT" | "STREAM"> {
  return {
    scope: "INPUT",
    path: pathOrUrl,
    options: options.map((opt) => {
      if (typeof opt === "function") {
        return opt();
      } else {
        return opt;
      }
    }),
  };
}

export function output(
  pathOrUrl: string,
  ...options: Array<OutputStreamOption>
): Stream<"OUTPUT" | "STREAM"> {
  return {
    scope: "OUTPUT",
    path: pathOrUrl,
    options: options.map((opt) => {
      if (typeof opt === "function") {
        return opt();
      } else {
        return opt;
      }
    }),
  };
}

export function connect({
  inputs,
  output,
}: {
  inputs: Array<Stream<"INPUT" | "STREAM">>;
  output: Stream<"OUTPUT" | "STREAM">;
}) {
  const parts: Array<Fragment<any>> = [];
  for (const input of inputs) {
    parts.push(...input.options.flat(Infinity));
    // @ts-ignore
    parts.push(...opts.InputFile(input.path).flat(Infinity));
  }

  parts.push(...output.options.flat(Infinity));
  // @ts-ignore
  parts.push(...opts.OutputFile(output.path).flat(Infinity));

  return parts;
}
