import { opt } from "../option";
// This one is handmade

export const Common = {
  /**
   * -i file
   *
   * Description: specify input file
   *
   * Category: Common
   */
  InputFile: opt("GLOBAL")("-i", (file: string) => ["-i", file]),

  /**
   * Description: specify output file (put at end)
   *
   * Category: Common
   */
  OutputFile: opt("GLOBAL")("__output", (outputfile: string) => [outputfile]),

  /**
   * args
   *
   * Description: Manual option creator, for adding arbitrary CLI args
   *
   * Category: Common
   */
  args: opt("UNKNOWN")("__args", (...args: Array<string | number>) =>
    args.map(String)
  ),
};
