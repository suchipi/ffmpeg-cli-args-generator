import { opt } from "../option";
// -L                  show license
// -h topic            show help
// -? topic            show help
// -help topic         show help
// --help topic        show help
// -version            show version
// -buildconf          show build configuration
// -formats            show available formats
// -muxers             show available muxers
// -demuxers           show available demuxers
// -devices            show available devices
// -codecs             show available codecs
// -decoders           show available decoders
// -encoders           show available encoders
// -bsfs               show available bit stream filters
// -protocols          show available protocols
// -filters            show available filters
// -pix_fmts           show available pixel formats
// -layouts            show standard channel layouts
// -sample_fmts        show available audio sample formats
// -colors             show available color names
// -sources device     list sources of the input device
// -sinks device       list sinks of the output device
// -hwaccels           show available HW acceleration methods

export const Info = {
  /**
   * -L
   *
   * Description: show license
   *
   * Category: Information
   */
  License: opt("GLOBAL")("-L"),

  /**
   * -h
   *
   * Description: show help
   *
   * Category: Information
   */
  Help: opt("GLOBAL")("-h"),

  /**
   * -h topic
   *
   * Description: show help
   *
   * Category: Information
   */
  HelpForTopic: opt("GLOBAL")("-h", (topic: string) => ["-h", topic]),

  /**
   * -version
   *
   * Description: show version
   *
   * Category: Information
   */
  Version: opt("GLOBAL")("-version"),

  /**
   * -buildconf
   *
   * Description: show build configuration
   *
   * Category: Information
   */
  BuildConfiguration: opt("GLOBAL")("-buildconf"),

  /**
   * -formats
   *
   * Description: show available formats
   *
   * Category: Information
   */
  Formats: opt("GLOBAL")("-formats"),

  /**
   * -muxers
   *
   * Description: show available muxers
   *
   * Category: Information
   */
  Muxers: opt("GLOBAL")("-muxers"),

  /**
   * -demuxers
   *
   * Description: show available demuxers
   *
   * Category: Information
   */
  Demuxers: opt("GLOBAL")("-demuxers"),

  /**
   * -devices
   *
   * Description: show available devices
   *
   * Category: Information
   */
  Devices: opt("GLOBAL")("-devices"),

  /**
   * -codecs
   *
   * Description: show available codecs
   *
   * Category: Information
   */
  Codecs: opt("GLOBAL")("-codecs"),

  /**
   * -decoders
   *
   * Description: show available decoders
   *
   * Category: Information
   */
  Decoders: opt("GLOBAL")("-decoders"),

  /**
   * -encoders
   *
   * Description: show available encoders
   *
   * Category: Information
   */
  Encoders: opt("GLOBAL")("-encoders"),

  /**
   * -bsfs
   *
   * Description: show available bit stream filters
   *
   * Category: Information
   */
  BitStreamFilters: opt("GLOBAL")("-bsfs"),

  /**
   * -protocols
   *
   * Description: show available protocols
   *
   * Category: Information
   */
  Protocols: opt("GLOBAL")("-protocols"),

  /**
   * -filters
   *
   * Description: show available filters
   *
   * Category: Information
   */
  Filters: opt("GLOBAL")("-filters"),

  /**
   * -pix_fmts
   *
   * Description: show available pixel formats
   *
   * Category: Information
   */
  PixelFormats: opt("GLOBAL")("-pix_fmts"),

  /**
   * -layouts
   *
   * Description: show standard channel layouts
   *
   * Category: Information
   */
  Layouts: opt("GLOBAL")("-layouts"),

  /**
   * -sample_fmts
   *
   * Description: show available audio sample formats
   *
   * Category: Information
   */
  AudioSampleFormats: opt("GLOBAL")("-sample_fmts"),

  /**
   * -colors
   *
   * Description: show available color names
   *
   * Category: Information
   */
  ColorNames: opt("GLOBAL")("-colors"),

  /**
   * -sources device
   *
   * Description: list sources of the input device
   *
   * Category: Information
   */
  SourcesOfDevice: opt("GLOBAL")("-sources", (device: string) => [
    "-sources",
    device,
  ]),

  /**
   * -sinks device
   *
   * Description: list sinks of the output device
   *
   * Category: Information
   */
  SinksOfDevice: opt("GLOBAL")("-sinks", (device: string) => [
    "-sinks",
    device,
  ]),

  /**
   * -hwaccels
   *
   * Description: show available HW acceleration methods
   *
   * Category: Information
   */
  HardwareAccelerationMethods: opt("GLOBAL")("-hwaccels"),
};
