import { opt } from "../option";
// -aframes number     set the number of audio frames to output
// -aq quality         set audio quality (codec-specific)
// -ar rate            set audio sampling rate (in Hz)
// -ac channels        set number of audio channels
// -an                 disable audio
// -acodec codec       force audio codec ('copy' to copy stream)
// -vol volume         change audio volume (256=normal)
// -af filter_graph    set audio filters

export const Audio = {
  /**
   * -aframes number
   *
   * Description: set the number of audio frames to output
   *
   * Category: Audio
   */
  AudioFramesToOutput: opt("OUTPUT")("-aframes", (amount: number) => [
    "-aframes",
    String(amount),
  ]),

  /**
   * -aq quality
   *
   * Description: set audio quality (codec-specific)
   *
   * Category: Audio
   */
  AudioQuality: opt("STREAM")("-aq", (quality: string) => ["-aq", quality]),

  /**
   * -ar rate
   *
   * Description: set audio sampling rate (in Hz)
   *
   * Category: Audio
   */
  AudioSampleRate: opt("STREAM")("-ar", (rateInHz: number) => [
    "-ar",
    String(rateInHz),
  ]),

  /**
   * -ac channels
   *
   * Description: set number of audio channels
   *
   * Category: Audio
   */
  AudioChannelsCount: opt("STREAM")("-ac", (count: number) => [
    "-ac",
    String(count),
  ]),

  /**
   * -an
   *
   * Description: disable audio
   *
   * Category: Audio
   */
  DisableAudio: opt("STREAM")("-an"),

  /**
   * -acodec codec
   *
   * Description: force audio codec ('copy' to copy stream)
   *
   * Category: Audio
   */
  AudioCodec: opt("STREAM")("-acodec", (codec: string) => ["-acodec", codec]),

  /**
   * -vol volume
   *
   * Description: change audio volume (256=normal)
   *
   * Category: Audio
   */
  Volume: opt("STREAM")("-vol", (volume: number = 256) => [
    "-vol",
    String(volume),
  ]),

  /**
   * -af filter_graph
   *
   * Description: set audio filters
   *
   * Category: Audio
   */
  AudioFilterGraph: opt("STREAM")("-af", (filter_graph: string) => [
    "-af",
    filter_graph,
  ]),
};
