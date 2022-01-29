import { opt } from "../option";
// -map [-]input_file_id[:stream_specifier][,sync_file_id[:stream_s  set input stream mapping
// -map_channel file.stream.channel[:syncfile.syncstream]  map an audio channel from one stream to another
// -map_chapters input_file_index  set chapters mapping
// -accurate_seek      enable/disable accurate seeking with -ss
// -itsoffset time_off  set the input ts offset
// -itsscale scale     set the input ts scale
// -dframes number     set the number of data frames to output
// -re                 read input at native frame rate
// -shortest           finish encoding within shortest input
// -bitexact           bitexact mode
// -copyinkf           copy initial non-keyframes
// -copypriorss        copy or discard frames before start time
// -tag fourcc/tag     force codec tag/fourcc
// -q q                use fixed quality scale (VBR)
// -qscale q           use fixed quality scale (VBR)
// -profile profile    set profile
// -attach filename    add an attachment to the output file
// -dump_attachment filename  extract an attachment into a file
// -stream_loop loop count  set number of times input stream shall be looped
// -thread_queue_size  set the maximum number of queued packets from the demuxer
// -find_stream_info   read and decode the streams to fill missing information with heuristics
// -autorotate         automatically insert correct rotate filters
// -muxdelay seconds   set the maximum demux-decode delay
// -muxpreload seconds  set the initial demux-decode delay
// -time_base ratio    set the desired time base hint for output stream (1:24, 1:48000 or 0.04166, 2.0833e-5)
// -enc_time_base ratio  set the desired time base for the encoder (1:24, 1:48000 or 0.04166, 2.0833e-5). two special values are defined - 0 = use frame rate (video) or sample rate (audio),-1 = match source time base
// -bsf bitstream_filters  A comma-separated list of bitstream filters
// -fpre filename      set options from indicated preset file
// -max_muxing_queue_size packets  maximum number of packets that can be buffered while waiting for all streams to initialize
// -dcodec codec       force data codec ('copy' to copy stream)

export const PerFileAdvanced = {
  /**
   * -map [-]input_file_id[:stream_specifier][,sync_file_id[:stream_s
   *
   * Description: set input stream mapping
   *
   * Category: Per-File (Advanced)
   */
  Map: opt("INPUT")("-map", (mapping: string) => ["-map", mapping]),
  // TODO: what the actual fuck

  /**
   * -map_channel file.stream.channel[:syncfile.syncstream]
   *
   * Description: map an audio channel from one stream to another
   *
   * Category: Per-File (Advanced)
   */
  MapAudioChannel: opt("STREAM")("-map_channel", (mapping: string) => [
    "-map_channel",
    mapping,
  ]),
  // TODO stronger type for the mapping

  /**
   * -map_chapters input_file_index
   *
   * Description: set chapters mapping
   *
   * Category: Per-File (Advanced)
   */
  MapChapters: opt("STREAM")("-map_chapters", (input_file_index: string) => [
    "-map_chapters",
    input_file_index,
  ]),

  /**
   * -accurate_seek
   *
   * Description: enable/disable accurate seeking with -ss
   *
   * Category: Per-File (Advanced)
   */
  AccurateSeeking: opt("STREAM")("-accurate_seek"),

  /**
   * -itsoffset time_off
   *
   * Description: set the input ts offset
   *
   * Category: Per-File (Advanced)
   */
  InputTimestampOffset: opt("INPUT")("-itsoffset", (time_off: string) => [
    "-itsoffset",
    time_off,
  ]),

  /**
   * -itsscale scale
   *
   * Description: set the input ts scale
   *
   * Category: Per-File (Advanced)
   */
  InputTimestampScale: opt("INPUT")("-itsscale", (scale: string) => [
    "-itsscale",
    scale,
  ]),

  /**
   * -dframes number
   *
   * Description: set the number of data frames to output
   *
   * Category: Per-File (Advanced)
   */
  DataFrames: opt("OUTPUT")("-dframes", (count: number) => [
    "-dframes",
    String(count),
  ]),

  /**
   * -re
   *
   * Description: read input at native frame rate
   *
   * Category: Per-File (Advanced)
   */
  ReadInputAtNativeFrameRate: opt("INPUT")("-re"),

  /**
   * -shortest
   *
   * Description: finish encoding within shortest input
   *
   * Category: Per-File (Advanced)
   */
  Shortest: opt("OUTPUT")("-shortest"),

  /**
   * -bitexact
   *
   * Description: bitexact mode
   *
   * Category: Per-File (Advanced)
   */
  BitExact: opt("UNKNOWN")("-bitexact"),

  /**
   * -copyinkf
   *
   * Description: copy initial non-keyframes
   *
   * Category: Per-File (Advanced)
   */
  CopyInitialNonKeyFrames: opt("STREAM")("-copyinkf"),

  /**
   * -copypriorss
   *
   * Description: copy or discard frames before start time
   *
   * Category: Per-File (Advanced)
   */
  CopyOrDiscardEarlyFrames: opt("STREAM")("-copypriorss"),

  /**
   * -tag fourcc/tag
   *
   * Description: force codec tag/fourcc
   *
   * Category: Per-File (Advanced)
   */
  CodecTag: opt("STREAM")("-tag", (fourccOrTag: string) => [
    "-tag",
    fourccOrTag,
  ]),

  /**
   * -q q
   *
   * Description: use fixed quality scale (VBR)
   *
   * Category: Per-File (Advanced)
   */
  QualityScale: opt("STREAM")("-q", (q: number) => ["-q", String(q)]),

  /**
   * -profile profile
   *
   * Description: set profile
   *
   * Category: Per-File (Advanced)
   */
  Profile: opt("STREAM")("-profile", (profile: string) => [
    "-profile",
    profile,
  ]),

  /**
   * -attach filename
   *
   * Description: add an attachment to the output file
   *
   * Category: Per-File (Advanced)
   */
  AttachFile: opt("OUTPUT")("-attach", (filename: string) => [
    "-attach",
    filename,
  ]),

  /**
   * -dump_attachment filename
   *
   * Description: extract an attachment into a file
   *
   * Category: Per-File (Advanced)
   */
  DumpAttachment: opt("INPUT")("-dump_attachment", (filename: string) => [
    "-dump_attachment",
    filename,
  ]),

  /**
   * -stream_loop loop count
   *
   * Description: set number of times input stream shall be looped
   *
   * Category: Per-File (Advanced)
   */
  StreamLoop: opt("INPUT")("-stream_loop", (loopCount: number) => [
    "-stream_loop",
    String(loopCount),
  ]),

  /**
   * -thread_queue_size
   *
   * Description: set the maximum number of queued packets from the demuxer
   *
   * Category: Per-File (Advanced)
   */
  ThreadQueueSize: opt("UNKNOWN")("-thread_queue_size", (size: number) => [
    "-thread_queue_size",
    String(size),
  ]),

  /**
   * -find_stream_info
   *
   * Description: read and decode the streams to fill missing information with heuristics
   *
   * Category: Per-File (Advanced)
   */
  FindStreamInfo: opt("UNKNOWN")("-find_stream_info"),

  /**
   * -autorotate
   *
   * Description: automatically insert correct rotate filters
   *
   * Category: Per-File (Advanced)
   */
  Autorotate: opt("UNKNOWN")("-autorotate"),

  /**
   * -muxdelay seconds
   *
   * Description: set the maximum demux-decode delay
   *
   * Category: Per-File (Advanced)
   */
  MaximumDemuxDecodeDelay: opt("INPUT")("-muxdelay", (seconds: number) => [
    "-muxdelay",
    String(seconds),
  ]),

  /**
   * -muxpreload seconds
   *
   * Description: set the initial demux-decode delay
   *
   * Category: Per-File (Advanced)
   */
  InitialDemuxDecodeDelay: opt("INPUT")("-muxpreload", (seconds: number) => [
    "-muxpreload",
    String(seconds),
  ]),

  /**
   * -time_base ratio
   *
   * Description: set the desired time base hint for output stream (1:24, 1:48000 or 0.04166, 2.0833e-5)
   *
   * Category: Per-File (Advanced)
   */
  TimeBase: opt("OUTPUT")("-time_base", (ratio: string) => [
    "-time_base",
    ratio,
  ]),

  /**
   * -enc_time_base ratio
   *
   * Description: set the desired time base for the encoder (1:24, 1:48000 or 0.04166, 2.0833e-5). two special values are defined - 0 = use frame rate (video) or sample rate (audio),-1 = match source time base
   *
   * Category: Per-File (Advanced)
   */
  EncoderTimeBase: opt("OUTPUT")("-enc_time_base", (ratio: string) => [
    "-enc_time_base",
    ratio,
  ]),

  /**
   * -bsf bitstream_filters
   *
   * Description: A comma-separated list of bitstream filters
   *
   * Category: Per-File (Advanced)
   */
  BitStreamFilters: opt("UNKNOWN")(
    "-bsf",
    (bitstream_filters: Array<string>) => ["-bsf", bitstream_filters.join(",")]
  ),

  /**
   * -fpre filename
   *
   * Description: set options from indicated preset file
   *
   * Category: Per-File (Advanced)
   */
  PresetFile: opt("UNKNOWN")("-fpre", (filename: string) => [
    "-fpre",
    filename,
  ]),

  /**
   * -max_muxing_queue_size packets
   *
   * Description: maximum number of packets that can be buffered while waiting for all streams to initialize
   *
   * Category: Per-File (Advanced)
   */
  MaxMuxingQueueSize: opt("UNKNOWN")(
    "-max_muxing_queue_size",
    (packets: number) => ["-max_muxing_queue_size", String(packets)]
  ),

  /**
   * -dcodec codec
   *
   * Description: force data codec ('copy' to copy stream)
   *
   * Category: Per-File (Advanced)
   */
  DataCodec: opt("UNKNOWN")("-dcodec", (codec: string) => ["-dcodec", codec]),
};
