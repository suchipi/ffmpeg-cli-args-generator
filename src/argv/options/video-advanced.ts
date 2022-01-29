import { opt } from "../option";
// -pix_fmt format     set pixel format
// -intra              deprecated use -g 1
// -rc_override override  rate control override for specific intervals
// -sameq              Removed
// -same_quant         Removed
// -passlogfile prefix  select two pass log file name prefix
// -deinterlace        this option is deprecated, use the yadif filter instead
// -psnr               calculate PSNR of compressed frames
// -vstats             dump video coding statistics to file
// -vstats_file file   dump video coding statistics to file
// -vstats_version     Version of the vstats format to use.
// -intra_matrix matrix  specify intra matrix coeffs
// -inter_matrix matrix  specify inter matrix coeffs
// -chroma_intra_matrix matrix  specify intra matrix coeffs
// -top                top=1/bottom=0/auto=-1 field first
// -vtag fourcc/tag    force video tag/fourcc
// -qphist             show QP histogram
// -force_fps          force the selected framerate, disable the best supported framerate selection
// -streamid streamIndex:value  set the value of an outfile streamid
// -force_key_frames timestamps  force key frames at specified timestamps
// -hwaccel hwaccel name  use HW accelerated decoding
// -hwaccel_device devicename  select a device for HW acceleration
// -hwaccel_output_format format  select output format used with HW accelerated decoding
// -vc channel         deprecated, use -channel
// -tvstd standard     deprecated, use -standard
// -vbsf video bitstream_filters  deprecated
// -vpre preset        set the video options to the indicated preset

export const VideoAdvanced = {
  /**
   * -pix_fmt format
   *
   * Description: set pixel format
   *
   * Category: Video (Advanced)
   */
  PixelFormat: opt("STREAM")("-pix_fmt", (format: string) => [
    "-pix_fmt",
    format,
  ]),

  /**
   * -rc_override override
   *
   * Description: rate control override for specific intervals
   *
   * Category: Video (Advanced)
   */
  RateControlOverride: opt("UNKNOWN")("-rc_override", (override: string) => [
    "-rc_override",
    override,
  ]),

  /**
   * -passlogfile prefix
   *
   * Description: select two pass log file name prefix
   *
   * Category: Video (Advanced)
   */
  PassLogFileNamePrefix: opt("UNKNOWN")("-passlogfile", (prefix: string) => [
    "-passlogfile",
    prefix,
  ]),

  /**
   * -psnr
   *
   * Description: calculate PSNR of compressed frames
   *
   * Category: Video (Advanced)
   */
  PSNR: opt("UNKNOWN")("-psnr"),

  /**
   * -vstats
   *
   * Description: dump video coding statistics to file
   *
   * Category: Video (Advanced)
   */
  VideoCodingStats: opt("UNKNOWN")("-vstats"),

  /**
   * -vstats_file file
   *
   * Description: dump video coding statistics to file
   *
   * Category: Video (Advanced)
   */
  VideoCodingStatsFile: opt("UNKNOWN")("-vstats_file", (file: string) => [
    "-vstats_file",
    file,
  ]),

  /**
   * -vstats_version
   *
   * Description: Version of the vstats format to use.
   *
   * Category: Video (Advanced)
   */
  VideoCodingStatsVersion: opt("UNKNOWN")("-vstats_version"),

  /**
   * -intra_matrix matrix
   *
   * Description: specify intra matrix coeffs
   *
   * Category: Video (Advanced)
   */
  IntraMatrixCoefficients: opt("UNKNOWN")("-intra_matrix", (matrix: string) => [
    "-intra_matrix",
    matrix,
  ]),

  /**
   * -inter_matrix matrix
   *
   * Description: specify inter matrix coeffs
   *
   * Category: Video (Advanced)
   */
  InterMatrixCoefficients: opt("UNKNOWN")("-inter_matrix", (matrix: string) => [
    "-inter_matrix",
    matrix,
  ]),

  /**
   * -chroma_intra_matrix matrix
   *
   * Description: specify intra matrix coeffs
   *
   * Category: Video (Advanced)
   */
  ChromaIntraMatrixCoefficients: opt("UNKNOWN")(
    "-chroma_intra_matrix",
    (matrix: string) => ["-chroma_intra_matrix", matrix]
  ),

  /**
   * -top
   *
   * Description: top=1/bottom=0/auto=-1 field first
   *
   * Category: Video (Advanced)
   */
  Top: opt("UNKNOWN")("-top"),

  /**
   * -vtag fourcc/tag
   *
   * Description: force video tag/fourcc
   *
   * Category: Video (Advanced)
   */
  VideoTag: opt("STREAM")("-vtag", (fourccOrTag: string) => [
    "-vtag",
    fourccOrTag,
  ]),

  /**
   * -qphist
   *
   * Description: show QP histogram
   *
   * Category: Video (Advanced)
   */
  QPHistogram: opt("UNKNOWN")("-qphist"),

  /**
   * -force_fps
   *
   * Description: force the selected framerate, disable the best supported framerate selection
   *
   * Category: Video (Advanced)
   */
  ForceFrameRate: opt("STREAM")("-force_fps", (framerate: number) => [
    "-force_fps",
    String(framerate),
  ]),

  /**
   * -streamid streamIndex:value
   *
   * Description: set the value of an outfile streamid
   *
   * Category: Video (Advanced)
   */
  StreamID: opt("UNKNOWN")("-streamid", (mappingString: string) => [
    "-streamid",
    mappingString,
  ]),

  /**
   * -force_key_frames timestamps
   *
   * Description: force key frames at specified timestamps
   *
   * Category: Video (Advanced)
   */
  ForceKeyFramesAt: opt("UNKNOWN")(
    "-force_key_frames",
    (timestamps: string) => ["-force_key_frames", timestamps]
  ),

  /**
   * -hwaccel hwaccel name
   *
   * Description: use HW accelerated decoding
   *
   * Category: Video (Advanced)
   */
  UseHardwareAcceleratedDecoding: opt("UNKNOWN")(
    "-hwaccel",
    (hwaccelName: string) => ["-hwaccel", hwaccelName]
  ),

  /**
   * -hwaccel_device devicename
   *
   * Description: select a device for HW acceleration
   *
   * Category: Video (Advanced)
   */
  HardwareAccelerationDevice: opt("UNKNOWN")(
    "-hwaccel_device",
    (devicename: string) => ["-hwaccel_device", devicename]
  ),

  /**
   * -hwaccel_output_format format
   *
   * Description: select output format used with HW accelerated decoding
   *
   * Category: Video (Advanced)
   */
  HardwareAccelerationOutputFormat: opt("UNKNOWN")(
    "-hwaccel_output_format",
    (format: string) => ["-hwaccel_output_format", format]
  ),

  /**
   * -vpre preset
   *
   * Description: set the video options to the indicated preset
   *
   * Category: Video (Advanced)
   */
  VideoPreset: opt("UNKNOWN")("-vpre", (preset: string) => ["-vpre", preset]),
};
