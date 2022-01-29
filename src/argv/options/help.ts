import { opt } from "../option";
// -h      -- print basic options
// -h long -- print more options
// -h full -- print all options (including all format and codec specific options, very long)
// -h type=name -- print all options for the named decoder/encoder/demuxer/muxer/filter/bsf

export const Help = {
  /**
   * -h
   *
   * Description: print basic options
   *
   * Category: Help
   */
  BasicOptions: opt("GLOBAL")("-h"),

  /**
   * -h long
   *
   * Description: print more options
   *
   * Category: Help
   */
  MoreOptions: opt("GLOBAL")("-h", () => ["-h", "long"]),

  /**
   * -h full
   *
   * Description: print all options (including all format and codec specific options, very long)
   *
   * Category: Help
   */
  AllOptions: opt("GLOBAL")("-h", () => ["-h", "full"]),

  /**
   * -h type=name
   *
   * Description: print all options for the named decoder/encoder/demuxer/muxer/filter/bsf
   *
   * Category: Help
   */
  OptionsFor: opt("GLOBAL")("-h", (type_: string, name: string) => [
    "-h",
    `${type_}=${name}`,
  ]),
};
