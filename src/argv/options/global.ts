import { opt } from "../option";
// -loglevel loglevel  set logging level
// -v loglevel         set logging level
// -report             generate a report
// -max_alloc bytes    set maximum size of a single allocated block
// -y                  overwrite output files
// -n                  never overwrite output files
// -ignore_unknown     Ignore unknown stream types
// -filter_threads     number of non-complex filter threads
// -filter_complex_threads  number of threads for -filter_complex
// -stats              print progress report during encoding
// -max_error_rate maximum error rate  ratio of errors (0.0: no errors, 1.0: 100% errors) above which ffmpeg returns an error instead of success.
// -bits_per_raw_sample number  set the number of bits per raw sample
// -vol volume         change audio volume (256=normal)

export const Global = {
  /**
   * -loglevel loglevel
   *
   * Description: set logging level
   *
   * Category: Global
   */
  LogLevel: opt("GLOBAL")("-loglevel", (loglevel: string) => [
    "-loglevel",
    loglevel,
  ]),

  /**
   * -v loglevel
   *
   * Description: set logging level
   *
   * Category: Global
   */
  Verbosity: opt("GLOBAL")("-v", (loglevel: string) => ["-v", loglevel]),

  /**
   * -report
   *
   * Description: generate a report
   *
   * Category: Global
   */
  Report: opt("GLOBAL")("-report"),

  /**
   * -max_alloc bytes
   *
   * Description: set maximum size of a single allocated block
   *
   * Category: Global
   */
  MaximumAllocatedBlockSize: opt("GLOBAL")("-max_alloc", (bytes: string) => [
    "-max_alloc",
    bytes,
  ]),

  /**
   * -y
   *
   * Description: overwrite output files
   *
   * Category: Global
   */
  OverwriteOutputFiles: opt("GLOBAL")("-y"),

  /**
   * -n
   *
   * Description: never overwrite output files
   *
   * Category: Global
   */
  NeverOverwriteOutputFiles: opt("GLOBAL")("-n"),

  /**
   * -ignore_unknown
   *
   * Description: Ignore unknown stream types
   *
   * Category: Global
   */
  IgnoreUnknownStreamTypes: opt("GLOBAL")("-ignore_unknown"),

  /**
   * -filter_threads
   *
   * Description: number of non-complex filter threads
   *
   * Category: Global
   */
  FilterThreads: opt("GLOBAL")("-filter_threads", (count: number) => [
    "-filter_threads",
    String(count),
  ]),

  /**
   * -filter_complex_threads
   *
   * Description: number of threads for -filter_complex
   *
   * Category: Global
   */
  FilterComplexThreads: opt("GLOBAL")(
    "-filter_complex_threads",
    (count: number) => ["-filter_complex_threads", String(count)]
  ),

  /**
   * -stats
   *
   * Description: print progress report during encoding
   *
   * Category: Global
   */
  Stats: opt("GLOBAL")("-stats"),

  /**
   * -max_error_rate number
   *
   * Description: ratio of errors (0.0: no errors, 1.0: 100% errors) above which ffmpeg returns an error instead of success.
   *
   * Category: Global
   */
  MaximumErrorRate: opt("GLOBAL")("-max_error_rate", (ratio: number) => [
    "-max_error_rate",
    String(ratio),
  ]),

  /**
   * -bits_per_raw_sample number
   *
   * Description: set the number of bits per raw sample
   *
   * Category: Global
   */
  BitsPerRawSample: opt("GLOBAL")("-bits_per_raw_sample", (number: string) => [
    "-bits_per_raw_sample",
    number,
  ]),

  /**
   * -vol volume
   *
   * Description: change audio volume (256=normal)
   *
   * Category: Global
   */
  Volume: opt("GLOBAL")("-vol", (volume: number = 256) => [
    "-vol",
    String(volume),
  ]),
};
