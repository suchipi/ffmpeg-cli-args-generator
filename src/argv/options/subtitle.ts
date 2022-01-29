import { opt } from "../option";
// -s size             set frame size (WxH or abbreviation)
// -sn                 disable subtitle
// -scodec codec       force subtitle codec ('copy' to copy stream)
// -stag fourcc/tag    force subtitle tag/fourcc
// -fix_sub_duration   fix subtitles duration
// -canvas_size size   set canvas size (WxH or abbreviation)
// -spre preset        set the subtitle options to the indicated preset

export const Subtitle = {
  /**
   * -s size
   *
   * Description: set frame size (WxH or abbreviation)
   *
   * Category: Subtitle
   */
  Size: opt("OUTPUT")("-s", (size: string) => ["-s", size]),

  /**
   * -sn
   *
   * Description: disable subtitle
   *
   * Category: Subtitle
   */
  NoSubtitle: opt("STREAM")("-sn"),

  /**
   * -scodec codec
   *
   * Description: force subtitle codec ('copy' to copy stream)
   *
   * Category: Subtitle
   */
  SubtitleCodec: opt("STREAM")("-scodec", (codec: string) => [
    "-scodec",
    codec,
  ]),

  /**
   * -stag fourcc/tag
   *
   * Description: force subtitle tag/fourcc
   *
   * Category: Subtitle
   */
  SubtitleTag: opt("STREAM")("-stag", (fourccOrTag: string) => [
    "-stag",
    fourccOrTag,
  ]),

  /**
   * -fix_sub_duration
   *
   * Description: fix subtitles duration
   *
   * Category: Subtitle
   */
  FixSubtitleDuration: opt("UNKNOWN")("-fix_sub_duration"),

  /**
   * -canvas_size size
   *
   * Description: set canvas size (WxH or abbreviation)
   *
   * Category: Subtitle
   */
  CanvasSize: opt("STREAM")("-canvas_size", (size: string) => [
    "-canvas_size",
    size,
  ]),

  /**
   * -spre preset
   *
   * Description: set the subtitle options to the indicated preset
   *
   * Category: Subtitle
   */
  SubtitlePreset: opt("UNKNOWN")("-spre", (preset: string) => [
    "-spre",
    preset,
  ]),
};
