import { makeBidoof, replace, set, t } from "bidoof";
import traverse from "@suchipi/traverse";
import { HelpOutput } from "../01_parse-help-output-to-json/types";
import { UserDataMap } from "./add-userdata";
import { set as lodashSet } from "lodash";
import { produce } from "immer";

// prettier-ignore
const bidoof = makeBidoof([
  { varName: "atag" }, set("varName", "audioTag"),
  { varName: "sampleFmt" }, set("varName", "sampleFormat"),
  { varName: "absf" }, set("varName", "audioBitStreamFilters"),
  { varName: "apre" }, set("varName", "audioPreset"),
  { varName: "aframes" }, set("varName", "audioFrames"),
  { varName: "aq" }, set("varName", "audioQuality"),
  { varName: "ar" }, set("varName", "audioRate"),
  { varName: "ac" }, set("varName", "audioChannels"),
  { varName: "an" }, set("varName", "disableAudio"),
  { varName: "acodec" }, set("varName", "audioCodec"),
  { varName: "vol" }, set("varName", "volume"),
  { varName: "af" }, set("varName", "audioFilters"),
  { varName: "dump" }, set("varName", "dumpInputPackets"),
  { varName: "hex" }, set("varName", "dumpInputPacketPayloads"),
  { varName: "vsync" }, set("varName", "videoSyncMethod"),
  { varName: "async" }, set("varName", "audioSyncMethod"),
  { varName: "adriftThreshold" }, set("varName", "audioDriftThreshold"),
  { varName: "copyts" }, set("varName", "copyTimestamps"),
  { varName: "startAtZero" }, set("varName", "shiftInputTimestampsToStartAtZero"),
  { varName: "copytb" }, set("varName", "copyInputTimeBase"),
  { varName: "dtsDeltaThreshold" }, set("varName", "timestampDiscontinuityDeltaThreshold"),
  { varName: "dtsErrorThreshold" }, set("varName", "timestampErrorThreshold"),
  { varName: "xerror" }, set("varName", "exitOnError"),
  { varName: "debugTs" }, set("varName", "debugTimestamps"),
  { varName: "sameq" }, set("varName", "sameQ"),
  { varName: "psnr" }, set("varName", "pSNR"),
  { varName: "vstats" }, set("varName", "dumpVideoCodingStats"),
  { varName: "vstatsFile" }, set("varName", "videoCodingStatsFile"),
  { varName: "vstatsVersion" }, set("varName", "videoCodingStatsVersion"),
  { varName: "qphist" }, set("varName", "qpHistogram"),
  { varName: "vc" }, set("varName", "videoChannel"),
  { varName: "tvstd" }, set("varName", "tvStandard"),
  { varName: "initHwDevice" }, set("varName", "initializeHardwareDevice"),
  { varName: "filterHwDevice" }, set("varName", "hardwareDeviceForFiltering"),
  { varName: "loglevel" }, set("varName", "logLevel"),
  { varName: "v" }, set("varName", "verbosity"),
  { varName: "maxAlloc" }, set("varName", "maximumAllocatedBlockSize"),
  { varName: "y" }, set("varName", "overwriteOutputFiles"),
  { varName: "n" }, set("varName", "neverOverwriteOutputFiles"),
  { varName: "maxErrorRate" }, set("varName", "maximumErrorRate"),
  { varName: "l" }, set("varName", "license"),

  { usage: "-h" }, set("userData.varName", "BasicHelp"),
  { usage: "-h long" }, set("userData.varName", "MoreHelp"),
  { usage: "-h long" }, set("args", []),
  { usage: "-h full" }, set("userData.varName", "FullHelp"),
  { usage: "-h full" }, set("args", []),
  { usage: "-h type=name" }, set("args", ["type", "name"]),

  { usage: "-h topic" }, set("userData.varName", "HelpForTopic"),
  { usage: "-? topic" }, set("userData.varName", "HelpForTopic"),
  { usage: "-? topic" }, set("args", ["topic"]),
  { usage: "-help topic" }, set("userData.varName", "HelpForTopic"),
  { usage: "--help topic" }, set("userData.varName", "HelpForTopic"),

  "buildConf", replace("buildConfiguration"),
  "bsfs", replace("bitStreamFilters"),
  "pixFmts", replace("pixelFormats"),
  "sampleFmts", replace("audioSampleFormats"),
  "hwaccels", replace("hardwareAccelerationMethods"),

  { usage: "-map [-]input_file_id[:stream_specifier][,sync_file_id[:stream_s" }, set("args", ["mapping"]),

  "mapChannel", replace("mapAudioChannel"),
  "accurateSeek", replace("accurateSeekingEnabled"),
  "itsoffset", replace("inputTimestampOffset"),
  "itsscale", replace("inputTimestampScale"),
  "dframes", replace("outputDataFramesCount"),
  "re", replace("readInputAtNativeFrameRate"),
  "copyinkf", replace("copyInitialNonKeyFrames"),
  "copypriorss", replace("shouldCopyFramesBeforeStartTime"),
  "fourccTag", replace("tag"),
  "number", replace("num"),
  "q", replace("videoQualityScale"),
  "qscale", replace("videoQualityScale"),
  "attach", replace("attachFileToOutput"),
  "dumpAttachment", replace("extractAttachmentFromInput"),
  "streamLoop", replace("inputLoopCount"),

  { usage: "-stream_loop loop count" }, set("args", ["count"]),
  { usage: "-thread_queue_size" }, set("args", ["size"]),

  "muxdelay", replace("maxDemuxDecodeDelay"),
  "muxpreload", replace("initialDemuxDecodeDelay"),
  "timeBase", replace("outputTimeBase"),
  "encTimeBase", replace("encoderTimeBase"),
  "bsf", replace("bitStreamFilters"),
  "fpre", replace("presetFile"),
  "maxMuxingQueueSize", replace("maxBufferedPacketsDuringStreamInitialization"),
  "dcodec", replace("dataCodec"),
  "f", replace("format"),
  "c", replace("codec"),
  "pre", replace("preset"),
  "t", replace("durationToTranscode"),
  "to", replace("stopTranscodingAt"),
  "fs", replace("fileSizeLimit"),
  "ss", replace("startTimeSeekOffset"),
  "sseof", replace("startTimeSeekOffsetRelativeToEOF"),
  "timestampSeekingEnabled", replace("seekTimestamp"),
  "timestamp", replace("recordingTimestamp"),

  { usage: "-metadata string=string" }, set("args", ["key", "value"]),

  "target", replace("targetFileType"),
  "apad", replace("audioPad"),
  "frames", replace("framesToOutput"),
  "filter", replace("filterGraph"),
  "filterScript", replace("filterGraphScriptFile"),
  "reinitFilter", replace("reInitializeFilterGraphOnInputChange"),
  "s", replace("size"),
  "sn", replace("disableSubtitles"),
  "scodec", replace("subtitlesCodec"),
  "stag", replace("subtitlesTag"),
  "fixSubDuration", replace("fixSubtitlesDuration"),
  "spre", replace("subtitlesPreset"),
  "pixFmt", replace("pixelFormat"),
  "rcOverride", replace("rateControlOverride"),
  "passlogfile", replace("multiPassLogFileNamePrefix"),
  "vtag", replace("videoTag"),
  "streamid", replace("streamId"),
  "hwaccel", replace("useHardwareAcceleratedDecoding"),
  "hwaccelDevice", replace("hardwareAccelerationDevice"),
  "hwaccelOutputFormat", replace("hardwareAcceleratedDecodingOutputFormat"),
  "vbsf", replace("videoBitStreamFilters"),
  "vpre", replace("videoPreset"),
  "vframes", replace("videoFrames"),
  "r", replace("frameRate"),
  "aspect", replace("aspectRatio"),
  "vn", replace("disableVideo"),
  "vcodec", replace("videoCodec"),
  "timecode", replace("initialTimecode"),
  "vf", replace("videoFilters"),
  "ab", replace("audioBitRate"),
  "b", replace("bitRate"),
  "dn", replace("disableData"),
]);

export function applyReplacements(
  helpOutput: HelpOutput<UserDataMap>
): HelpOutput<UserDataMap> {
  const result = produce(helpOutput, (draft) => {
    traverse(draft, (value, path) => {
      const newValue = bidoof(value);
      if (value !== newValue) {
        lodashSet(draft, path, newValue);
      }
    });
  });

  return result as any;
}
