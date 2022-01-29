import { opt } from "../option";
// -vframes number     set the number of video frames to output
// -r rate             set frame rate (Hz value, fraction or abbreviation)
// -s size             set frame size (WxH or abbreviation)
// -aspect aspect      set aspect ratio (4:3, 16:9 or 1.3333, 1.7777)
// -bits_per_raw_sample number  set the number of bits per raw sample
// -vn                 disable video
// -vcodec codec       force video codec ('copy' to copy stream)
// -timecode hh:mm:ss[:;.]ff  set initial TimeCode value.
// -pass n             select the pass number (1 to 3)
// -vf filter_graph    set video filters
// -ab bitrate         audio bitrate (please use -b:a)
// -b bitrate          video bitrate (please use -b:v)
// -dn                 disable data

export const Video = {
  /**
   * -vframes number
   *
   * Description: set the number of video frames to output
   *
   * Category: Video
   */
  VideoFramesToOutput: opt("STREAM")("-vframes", (amount: number) => [
    "-vframes",
    String(amount),
  ]),

  /**
   * -r rate
   *
   * Description: set frame rate (Hz value, fraction or abbreviation)
   *
   * Category: Video
   */
  FrameRate: opt("STREAM")("-r", (rate: number | string) => [
    "-r",
    String(rate),
  ]),

  /**
   * -s size
   *
   * Description: set frame size (WxH or abbreviation)
   *
   * Category: Video
   */
  Size: opt("STREAM")("-s", (size: string) => ["-s", size]),

  /**
   * -aspect aspect
   *
   * Description: set aspect ratio (4:3, 16:9 or 1.3333, 1.7777)
   *
   * Category: Video
   */
  AspectRatio: opt("STREAM")("-aspect", (aspect: string) => [
    "-aspect",
    aspect,
  ]),

  /**
   * -bits_per_raw_sample number
   *
   * Description: set the number of bits per raw sample
   *
   * Category: Video
   */
  BitsPerRawSample: opt("STREAM")("-bits_per_raw_sample", (amount: number) => [
    "-bits_per_raw_sample",
    String(amount),
  ]),

  /**
   * -vn
   *
   * Description: disable video
   *
   * Category: Video
   */
  DisableVideo: opt("UNKNOWN")("-vn"),

  /**
   * -vcodec codec
   *
   * Description: force video codec ('copy' to copy stream)
   *
   * Category: Video
   */
  VideoCodec: opt("STREAM")("-vcodec", (codec: string) => ["-vcodec", codec]),

  /**
   * -timecode hh:mm:ss[:;.]ff
   *
   * Description: set initial TimeCode value.
   *
   * Category: Video
   */
  InitialTimeCode: opt("STREAM")("-timecode", (value: string) => [
    "-timecode",
    value,
  ]),

  /**
   * -pass n
   *
   * Description: select the pass number (1 to 3)
   *
   * Category: Video
   */
  Pass: opt("UNKNOWN")("-pass", (n: 1 | 2 | 3) => ["-pass", String(n)]),

  /**
   * -vf filter_graph
   *
   * Description: set video filters
   *
   * Category: Video
   */
  VideoFilterGraph: opt("UNKNOWN")("-vf", (filter_graph: string) => [
    "-vf",
    filter_graph,
  ]),

  /**
   * -ab bitrate
   *
   * Description: audio bitrate (please use -b:a)
   *
   * Category: Video
   */
  AudioBitrate: opt("STREAM")("-ab", (bitrate: string | number) => [
    "-ab",
    String(bitrate),
  ]),

  /**
   * -b bitrate
   *
   * Description: video bitrate (please use -b:v)
   *
   * Category: Video
   */
  VideoBitrate: opt("STREAM")("-b", (bitrate: string | number) => [
    "-b",
    String(bitrate),
  ]),

  /**
   * -dn
   *
   * Description: disable data
   *
   * Category: Video
   */
  DisableData: opt("UNKNOWN")("-dn"),
};
