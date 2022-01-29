import { opt } from "../option";
// -cpuflags flags     force specific cpu flags
// -hide_banner hide_banner  do not show program banner
// -copy_unknown       Copy unknown stream types
// -benchmark          add timings for benchmarking
// -benchmark_all      add timings for each task
// -progress url       write program-readable progress information
// -stdin              enable or disable interaction on standard input
// -timelimit limit    set max runtime in seconds
// -dump               dump each input packet
// -hex                when dumping packets, also dump the payload
// -vsync              video sync method
// -frame_drop_threshold   frame drop threshold
// -async              audio sync method
// -adrift_threshold threshold  audio drift threshold
// -copyts             copy timestamps
// -start_at_zero      shift input timestamps to start at 0 when using copyts
// -copytb mode        copy input stream time base when stream copying
// -dts_delta_threshold threshold  timestamp discontinuity delta threshold
// -dts_error_threshold threshold  timestamp error delta threshold
// -xerror error       exit on error
// -abort_on flags     abort on the specified condition flags
// -filter_complex graph_description  create a complex filtergraph
// -lavfi graph_description  create a complex filtergraph
// -filter_complex_script filename  read complex filtergraph description from a file
// -debug_ts           print timestamp debugging info
// -intra              deprecated use -g 1
// -sameq              Removed
// -same_quant         Removed
// -deinterlace        this option is deprecated, use the yadif filter instead
// -psnr               calculate PSNR of compressed frames
// -vstats             dump video coding statistics to file
// -vstats_file file   dump video coding statistics to file
// -vstats_version     Version of the vstats format to use.
// -qphist             show QP histogram
// -vc channel         deprecated, use -channel
// -tvstd standard     deprecated, use -standard
// -isync              this option is deprecated and does nothing
// -sdp_file file      specify a file in which to print sdp information
// -vaapi_device device  set VAAPI hardware device (DRM path or X11 display name)
// -init_hw_device args  initialise hardware device
// -filter_hw_device device  set hardware device used when filtering

export const GlobalAdvanced = {
  /**
   * -cpuflags flags
   *
   * Description: force specific cpu flags
   *
   * Category: Global (Advanced)
   */
  CpuflagsFlags: opt("GLOBAL")("-cpuflags", (flags: string) => [
    "-cpuflags",
    flags,
  ]),

  /**
   * -hide_banner hide_banner
   *
   * Description: do not show program banner
   *
   * Category: Global (Advanced)
   */
  HideBanner: opt("GLOBAL")("-hide_banner", (hide_banner: boolean) => [
    "-hide_banner",
    String(hide_banner),
  ]),

  /**
   * -copy_unknown
   *
   * Description: Copy unknown stream types
   *
   * Category: Global (Advanced)
   */
  CopyUnknown: opt("GLOBAL")("-copy_unknown"),

  /**
   * -benchmark
   *
   * Description: add timings for benchmarking
   *
   * Category: Global (Advanced)
   */
  Benchmark: opt("GLOBAL")("-benchmark"),

  /**
   * -benchmark_all
   *
   * Description: add timings for each task
   *
   * Category: Global (Advanced)
   */
  BenchmarkAll: opt("GLOBAL")("-benchmark_all"),

  /**
   * -progress url
   *
   * Description: write program-readable progress information
   *
   * Category: Global (Advanced)
   */
  ProgressUrl: opt("GLOBAL")("-progress", (url: string) => ["-progress", url]),

  /**
   * -stdin
   *
   * Description: enable or disable interaction on standard input
   *
   * Category: Global (Advanced)
   */
  Stdin: opt("GLOBAL")("-stdin"),

  /**
   * -timelimit limit
   *
   * Description: set max runtime in seconds
   *
   * Category: Global (Advanced)
   */
  TimelimitLimit: opt("GLOBAL")("-timelimit", (limit: number) => [
    "-timelimit",
    String(limit),
  ]),

  /**
   * -dump
   *
   * Description: dump each input packet
   *
   * Category: Global (Advanced)
   */
  DumpInputPackets: opt("GLOBAL")("-dump"),

  /**
   * -hex
   *
   * Description: when dumping packets, also dump the payload
   *
   * Category: Global (Advanced)
   */
  IncludePacketPayloadsInDumps: opt("GLOBAL")("-hex"),

  /**
   * -vsync
   *
   * Description: video sync method
   *
   * Category: Global (Advanced)
   */
  VideoSyncMethod: opt("GLOBAL")("-vsync", (method: string) => [
    "-vsync",
    method,
  ]),

  /**
   * -frame_drop_threshold
   *
   * Description: frame drop threshold
   *
   * Category: Global (Advanced)
   */
  FrameDropThreshold: opt("GLOBAL")(
    "-frame_drop_threshold",
    (threshold: number) => ["-frame_drop_threshold", String(threshold)]
  ),

  /**
   * -async
   *
   * Description: audio sync method
   *
   * Category: Global (Advanced)
   */
  AudioSyncMethod: opt("GLOBAL")("-async", (method: string) => [
    "-async",
    method,
  ]),

  /**
   * -adrift_threshold threshold
   *
   * Description: audio drift threshold
   *
   * Category: Global (Advanced)
   */
  AudioDriftThreshold: opt("GLOBAL")(
    "-adrift_threshold",
    (threshold: number) => ["-adrift_threshold", String(threshold)]
  ),

  /**
   * -copyts
   *
   * Description: copy timestamps
   *
   * Category: Global (Advanced)
   */
  CopyTimestamps: opt("GLOBAL")("-copyts"),

  /**
   * -start_at_zero
   *
   * Description: shift input timestamps to start at 0 when using copyts
   *
   * Category: Global (Advanced)
   */
  StartAtZero: opt("GLOBAL")("-start_at_zero"),

  /**
   * -copytb mode
   *
   * Description: copy input stream time base when stream copying
   *
   * Category: Global (Advanced)
   */
  CopyInputStreamTimeBase: opt("GLOBAL")("-copytb", (mode: string) => [
    "-copytb",
    mode,
  ]),

  /**
   * -dts_delta_threshold threshold
   *
   * Description: timestamp discontinuity delta threshold
   *
   * Category: Global (Advanced)
   */
  TimestampDiscontinuityDeltaThreshold: opt("GLOBAL")(
    "-dts_delta_threshold",
    (threshold: number) => ["-dts_delta_threshold", String(threshold)]
  ),

  /**
   * -dts_error_threshold threshold
   *
   * Description: timestamp error delta threshold
   *
   * Category: Global (Advanced)
   */
  TimestampErrorDeltaThreshold: opt("GLOBAL")(
    "-dts_error_threshold",
    (threshold: number) => ["-dts_error_threshold", String(threshold)]
  ),

  /**
   * -xerror error
   *
   * Description: exit on error
   *
   * Category: Global (Advanced)
   */
  ExitOnError: opt("GLOBAL")("-xerror", (error: string) => ["-xerror", error]),

  /**
   * -abort_on flags
   *
   * Description: abort on the specified condition flags
   *
   * Category: Global (Advanced)
   */
  AbortOnFlags: opt("GLOBAL")("-abort_on", (flags: string) => [
    "-abort_on",
    flags,
  ]),

  /**
   * -filter_complex graph_description
   *
   * Description: create a complex filtergraph
   *
   * Category: Global (Advanced)
   */
  FilterComplexGraph: opt("GLOBAL")(
    "-filter_complex",
    (graph_description: string) => ["-filter_complex", graph_description]
  ),

  /**
   * -lavfi graph_description
   *
   * Description: create a complex filtergraph
   *
   * Category: Global (Advanced)
   */
  LavfiGraph: opt("GLOBAL")("-lavfi", (graph_description: string) => [
    "-lavfi",
    graph_description,
  ]),

  /**
   * -filter_complex_script filename
   *
   * Description: read complex filtergraph description from a file
   *
   * Category: Global (Advanced)
   */
  FilterComplexScript: opt("GLOBAL")(
    "-filter_complex_script",
    (filename: string) => ["-filter_complex_script", filename]
  ),

  /**
   * -debug_ts
   *
   * Description: print timestamp debugging info
   *
   * Category: Global (Advanced)
   */
  DebugTimestamps: opt("GLOBAL")("-debug_ts"),

  /**
   * -psnr
   *
   * Description: calculate PSNR of compressed frames
   *
   * Category: Global (Advanced)
   */
  PSNR: opt("GLOBAL")("-psnr"),

  /**
   * -vstats
   *
   * Description: dump video coding statistics to file
   *
   * Category: Global (Advanced)
   */
  VideoStats: opt("GLOBAL")("-vstats"),

  /**
   * -vstats_file file
   *
   * Description: dump video coding statistics to file
   *
   * Category: Global (Advanced)
   */
  VideoStatsFile: opt("GLOBAL")("-vstats_file", (file: string) => [
    "-vstats_file",
    file,
  ]),

  /**
   * -vstats_version
   *
   * Description: Version of the vstats format to use.
   *
   * Category: Global (Advanced)
   */
  VideoStatsVersion: opt("GLOBAL")("-vstats_version"),

  /**
   * -qphist
   *
   * Description: show QP histogram
   *
   * Category: Global (Advanced)
   */
  QPHistogram: opt("GLOBAL")("-qphist"),

  /**
   * -sdp_file file
   *
   * Description: specify a file in which to print sdp information
   *
   * Category: Global (Advanced)
   */
  SdpFile: opt("GLOBAL")("-sdp_file", (file: string) => ["-sdp_file", file]),

  /**
   * -vaapi_device device
   *
   * Description: set VAAPI hardware device (DRM path or X11 display name)
   *
   * Category: Global (Advanced)
   */
  VaapiDevice: opt("GLOBAL")("-vaapi_device", (device: string) => [
    "-vaapi_device",
    device,
  ]),

  /**
   * -init_hw_device args
   *
   * Description: initialise hardware device
   *
   * Category: Global (Advanced)
   */
  InitializeHardwareDevice: opt("GLOBAL")("-init_hw_device", (args: string) => [
    "-init_hw_device",
    args,
  ]),

  /**
   * -filter_hw_device device
   *
   * Description: set hardware device used when filtering
   *
   * Category: Global (Advanced)
   */
  FilterHardwareDevice: opt("GLOBAL")("-filter_hw_device", (device: string) => [
    "-filter_hw_device",
    device,
  ]),
};
