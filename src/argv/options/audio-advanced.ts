import { opt } from "../option";
// -atag fourcc/tag    force audio tag/fourcc
// -sample_fmt format  set sample format
// -channel_layout layout  set channel layout
// -guess_layout_max   set the maximum number of channels to try to guess the channel layout
// -absf audio bitstream_filters  deprecated
// -apre preset        set the audio options to the indicated preset

export const AudioAdvanced = {
  /**
   * -atag fourcc/tag
   *
   * Description: force audio tag/fourcc
   *
   * Category: Audio (Advanced)
   */
  AudioTag: opt("STREAM")("-atag", (fourccOrTag: string) => [
    "-atag",
    fourccOrTag,
  ]),

  /**
   * -sample_fmt format
   *
   * Description: set sample format
   *
   * Category: Audio (Advanced)
   */
  SampleFormat: opt("STREAM")("-sample_fmt", (format: string) => [
    "-sample_fmt",
    format,
  ]),

  /**
   * -channel_layout layout
   *
   * Description: set channel layout
   *
   * Category: Audio (Advanced)
   */
  ChannelLayout: opt("STREAM")("-channel_layout", (layout: string) => [
    "-channel_layout",
    layout,
  ]),

  /**
   * -guess_layout_max
   *
   * Description: set the maximum number of channels to try to guess the channel layout
   *
   * Category: Audio (Advanced)
   */
  GuessLayoutMax: opt("UNKNOWN")("-guess_layout_max"),

  /**
   * -apre preset
   *
   * Description: set the audio options to the indicated preset
   *
   * Category: Audio (Advanced)
   */
  AudioPreset: opt("STREAM")("-apre", (preset: string) => ["-apre", preset]),
};
