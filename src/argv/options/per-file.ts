import { opt } from "../option";
// -f fmt              force format
// -c codec            codec name
// -codec codec        codec name
// -pre preset         preset name
// -map_metadata outfile[,metadata]:infile[,metadata]  set metadata information of outfile from infile
// -t duration         record or transcode "duration" seconds of audio/video
// -to time_stop       record or transcode stop time
// -fs limit_size      set the limit file size in bytes
// -ss time_off        set the start time offset
// -sseof time_off     set the start time offset relative to EOF
// -seek_timestamp     enable/disable seeking by timestamp with -ss
// -timestamp time     set the recording timestamp ('now' to set the current time)
// -metadata string=string  add metadata
// -program title=string:st=number...  add program with specified streams
// -target type        specify target file type ("vcd", "svcd", "dvd", "dv" or "dv50" with optional prefixes "pal-", "ntsc-" or "film-")
// -apad               audio pad
// -frames number      set the number of frames to output
// -filter filter_graph  set stream filtergraph
// -filter_script filename  read stream filtergraph description from a file
// -reinit_filter      reinit filtergraph on input parameter changes
// -discard            discard
// -disposition        disposition

export const PerFile = {
  /**
   * -f fmt
   *
   * Description: force format
   *
   * Category: Per-File
   */
  Format: opt("STREAM")("-f", (format: string) => ["-f", format]),

  /**
   * -c codec
   *
   * Description: codec name
   *
   * Category: Per-File
   */
  Codec: opt("STREAM")("-c", (codec: string) => ["-c", codec]),

  /**
   * -pre preset
   *
   * Description: preset name
   *
   * Category: Per-File
   */
  Preset: opt("STREAM")("-pre", (preset: string) => ["-pre", preset]),

  /**
   * -map_metadata outfile[,metadata]:infile[,metadata]
   *
   * Description: set metadata information of outfile from infile
   *
   * Category: Per-File
   */
  MapMetadata: opt("OUTPUT")(
    "-map_metadata",
    (
      outfile: string,
      infile: string,
      outfileMetadata: string,
      infileMetadata: string
    ) => [
      "-map_metadata",
      `${outfile}${outfileMetadata ? "," + outfileMetadata : ""}:${infile}${
        infileMetadata ? "," + infileMetadata : ""
      }`,
    ]
  ),

  /**
   * -t duration
   *
   * Description: record or transcode "duration" seconds of audio/video
   *
   * Category: Per-File
   */
  TranscodeDuration: opt("STREAM")("-t", (duration: string) => [
    "-t",
    duration,
  ]),

  /**
   * -to time_stop
   *
   * Description: record or transcode stop time
   *
   * Category: Per-File
   */
  StopTime: opt("STREAM")("-to", (time_stop: string) => ["-to", time_stop]),

  /**
   * -fs limit_size
   *
   * Description: set the limit file size in bytes
   *
   * Category: Per-File
   */
  FileSizeLimit: opt("OUTPUT")("-fs", (limit_size: string) => [
    "-fs",
    limit_size,
  ]),

  /**
   * -ss time_off
   *
   * Description: set the start time offset
   *
   * Category: Per-File
   */
  StartTimeSeekOffset: opt("INPUT")("-ss", (time_off: string | number) => [
    "-ss",
    String(time_off),
  ]),

  /**
   * -sseof time_off
   *
   * Description: set the start time offset relative to EOF (end of file)
   *
   * Category: Per-File
   */
  StartTimeSeekOffsetRelativeToEOF: opt("INPUT")(
    "-sseof",
    (time_off: string) => ["-sseof", time_off]
  ),

  /**
   * -seek_timestamp
   *
   * Description: enable/disable seeking by timestamp with -ss
   *
   * Category: Per-File
   */
  SeekTimestamp: opt("STREAM")("-seek_timestamp"),

  /**
   * -timestamp time
   *
   * Description: set the recording timestamp ('now' to set the current time)
   *
   * Category: Per-File
   */
  Timestamp: opt("STREAM")("-timestamp", (time: string) => [
    "-timestamp",
    time,
  ]),

  /**
   * -metadata string=string
   *
   * Description: add metadata
   *
   * Category: Per-File
   */
  Metadata: opt("OUTPUT")("-metadata", (key: string, value: string) => [
    "-metadata",
    `${key}=${value}`,
  ]),

  /**
   * -program title=string:st=number...
   *
   * Description: add program with specified streams
   *
   * Category: Per-File
   */
  Program: opt("OUTPUT")("-program", (program: string) => [
    "-program",
    program,
  ]),
  // TODO what the hell is this

  /**
   * -target type
   *
   * Description: specify target file type ("vcd", "svcd", "dvd", "dv" or "dv50" with optional prefixes "pal-", "ntsc-" or "film-")
   *
   * Category: Per-File
   */
  TargetFileType: opt("OUTPUT")(
    "-target",
    (
      type:
        | "vcd"
        | "svcd"
        | "dvd"
        | "dv"
        | "dv50"
        | "pal-vcd"
        | "pal-svcd"
        | "pal-dvd"
        | "pal-dv"
        | "pal-dv50"
        | "ntsc-vcd"
        | "ntsc-svcd"
        | "ntsc-dvd"
        | "ntsc-dv"
        | "ntsc-dv50"
        | "film-vcd"
        | "film-svcd"
        | "film-dvd"
        | "film-dv"
        | "film-dv50"
    ) => ["-target", type]
  ),

  /**
   * -apad
   *
   * Description: audio pad
   *
   * Category: Per-File
   */
  AudioPad: opt("UNKNOWN")("-apad"),

  /**
   * -frames number
   *
   * Description: set the number of frames to output
   *
   * Category: Per-File
   */
  FramesToOutput: opt("OUTPUT")("-frames", (number: string) => [
    "-frames",
    number,
  ]),

  /**
   * -filter filter_graph
   *
   * Description: set stream filtergraph
   *
   * Category: Per-File
   */
  FilterGraph: opt("UNKNOWN")("-filter", (filter_graph: string) => [
    "-filter",
    filter_graph,
  ]),

  /**
   * -filter_script filename
   *
   * Description: read stream filtergraph description from a file
   *
   * Category: Per-File
   */
  FilterGraphScript: opt("UNKNOWN")("-filter_script", (filename: string) => [
    "-filter_script",
    filename,
  ]),

  /**
   * -reinit_filter
   *
   * Description: reinit filtergraph on input parameter changes
   *
   * Category: Per-File
   */
  ReinitializeFilterGraphOnInputParameterChange:
    opt("UNKNOWN")("-reinit_filter"),

  /**
   * -discard
   *
   * Description: discard
   *
   * Category: Per-File
   */
  Discard: opt("UNKNOWN")("-discard"),

  /**
   * -disposition
   *
   * Description: disposition
   *
   * Category: Per-File
   */
  Disposition: opt("UNKNOWN")("-disposition"),
};
