import {
  makeMapperFunction,
  replace,
  set,
  t,
  transform,
  at,
  modify,
} from "bidoof";
import { walk } from "bibarel";
import traverse from "@suchipi/traverse";
import { get } from "lodash";
import util from "util";
import { HelpOutput } from "../01_parse-help-output-to-json/types";
import { UserDataMap } from "./add-userdata";

const REMOVE = Symbol("REMOVE");
const remove = replace(REMOVE);

const filter = <T>(predicate: (item: T) => boolean) =>
  transform((arr: Array<T>) => arr.filter(predicate));

const changeVarName = (from: string, to: string): Array<any> => {
  return [{ varName: from }, set("varName", to)];
};

const setVarName = (newName: string) => set("userData.varName", newName);

const renameArg = (from: string, to: string): Array<any> => {
  return [
    { args: t.arrayContaining(from) },
    modify((obj) => {
      obj.args = obj.args.map((arg) => (arg === from ? to : arg));
    }),
  ];
};

// prettier-ignore
const mapValue = makeMapperFunction([
  {is: "GeneralOption", name: "-?"},
  setVarName("questionMark"),

  { usage: "-h type=name" },
  set("args", ["type", "name"]),
  setVarName("HelpForObject"),

  { is: "GeneralSection", name: "Getting help:" },
  setVarName("Help"),

  
  { is: "GeneralSection", name: "Print help / information / capabilities:" },
  setVarName("Info"),

  { usage: "-h topic" }, setVarName("HelpForTopic"),
  { usage: "-? topic" }, setVarName("HelpForTopic"),
  { usage: "-help topic" }, setVarName("HelpForTopic"),
  { usage: "--help topic" }, setVarName("HelpForTopic"),

  { is: "GeneralSection", name: "Global options (affect whole program instead of just one file:" },
  setVarName("Global"),

  { usage: "-h" }, setVarName("BasicHelp"),
  { usage: "-h long" }, setVarName("MoreHelp"),
  { usage: "-h long" }, set("args", []),
  { usage: "-h full" }, setVarName("FullHelp"),
  { usage: "-h full" }, set("args", []),

  { is: "GeneralSection", name: "Advanced global options:" },
  setVarName("GlobalAdvanced"),

  { is: "GeneralSection", name: "Per-file main options:" },
  setVarName("PerFile"),

  { is: "GeneralSection", name: "Advanced per-file options:" },
  setVarName("PerFileAdvanced"),

  { is: "GeneralSection", name: "Video options:" },
  setVarName("Video"),

  { is: "GeneralSection", name: "Advanced Video options:" },
  setVarName("VideoAdvanced"),

  { is: "GeneralSection", name: "Audio options:" },
  setVarName("Audio"),

  { is: "GeneralSection", name: "Advanced Audio options:" },
  setVarName("AudioAdvanced"),

  { is: "GeneralSection", name: "Subtitle options:" },
  setVarName("Subtitles"),

  { args: t.arrayContaining("-?") },
  at("args", filter(item => item !== "-?")),


  ...changeVarName("atag", "audioTag"),
  ...changeVarName("sampleFmt", "sampleFormat"),
  ...changeVarName("absf", "audioBitStreamFilters"),
  ...changeVarName("apre", "audioPreset"),
  ...changeVarName("aframes", "audioFrames"),
  ...changeVarName("aq", "audioQuality"),
  ...changeVarName("ar", "audioRate"),
  ...changeVarName("ac", "audioChannels"),
  ...changeVarName("an", "disableAudio"),
  ...changeVarName("acodec", "audioCodec"),
  ...changeVarName("vol", "volume"),
  ...changeVarName("af", "audioFilters"),
  ...changeVarName("dump", "dumpInputPackets"),
  ...changeVarName("hex", "dumpInputPacketPayloads"),
  ...changeVarName("vsync", "videoSyncMethod"),
  ...changeVarName("async", "audioSyncMethod"),
  ...changeVarName("adriftThreshold", "audioDriftThreshold"),
  ...changeVarName("copyts", "copyTimestamps"),
  ...changeVarName("startAtZero", "shiftInputTimestampsToStartAtZero"),
  ...changeVarName("copytb", "copyInputTimeBase"),
  ...changeVarName("dtsDeltaThreshold", "timestampDiscontinuityDeltaThreshold"),
  ...changeVarName("dtsErrorThreshold", "timestampErrorThreshold"),
  ...changeVarName("xerror", "exitOnError"),
  ...changeVarName("debugTs", "debugTimestamps"),
  ...changeVarName("sameq", "sameQ"),
  ...changeVarName("psnr", "pSNR"),
  ...changeVarName("vstats", "dumpVideoCodingStats"),
  ...changeVarName("vstatsFile", "videoCodingStatsFile"),
  ...changeVarName("vstatsVersion", "videoCodingStatsVersion"),
  ...changeVarName("qphist", "qpHistogram"),
  ...changeVarName("vc", "videoChannel"),
  ...changeVarName("tvstd", "tvStandard"),
  ...changeVarName("initHwDevice", "initializeHardwareDevice"),
  ...changeVarName("filterHwDevice", "hardwareDeviceForFiltering"),
  ...changeVarName("loglevel", "logLevel"),
  ...changeVarName("v", "verbosity"),
  ...changeVarName("maxAlloc", "maximumAllocatedBlockSize"),
  ...changeVarName("y", "overwriteOutputFiles"),
  ...changeVarName("n", "neverOverwriteOutputFiles"),
  ...changeVarName("maxErrorRate", "maximumErrorRate"),
  ...changeVarName("l", "license"),
  ...changeVarName("buildconf", "buildConfiguration"),


  ...changeVarName("bsfs", "bitStreamFilters"),
  ...changeVarName("pixFmts", "pixelFormats"),
  ...changeVarName("sampleFmts", "audioSampleFormats"),
  ...changeVarName("hwaccels", "hardwareAccelerationMethods"),

  { usage: "-map [-]input_file_id[:stream_specifier][,sync_file_id[:stream_s" },
  set("args", ["mapping"]),

  ...changeVarName("mapChannel", "mapAudioChannel"),
  ...changeVarName("accurateSeek", "accurateSeekingEnabled"),
  ...changeVarName("itsoffset", "inputTimestampOffset"),
  ...changeVarName("itsscale", "inputTimestampScale"),
  ...changeVarName("dframes", "outputDataFramesCount"),
  ...changeVarName("re", "readInputAtNativeFrameRate"),
  ...changeVarName("copyinkf", "copyInitialNonKeyFrames"),
  ...changeVarName("copypriorss", "shouldCopyFramesBeforeStartTime"),
  ...renameArg("fourccTag", "tag"),
  ...renameArg("number", "num"),
  ...changeVarName("q", "videoQualityScale"),
  ...changeVarName("qscale", "videoQualityScale"),
  ...changeVarName("attach", "attachFileToOutput"),
  ...changeVarName("dumpAttachment", "extractAttachmentFromInput"),
  ...changeVarName("streamLoop", "inputLoopCount"),

  { usage: "-stream_loop loop count" }, set("args", ["count"]),
  { usage: "-thread_queue_size" }, set("args", ["size"]),

  ...changeVarName("muxdelay", "maxDemuxDecodeDelay"),
  ...changeVarName("muxpreload", "initialDemuxDecodeDelay"),
  ...changeVarName("timeBase", "outputTimeBase"),
  ...changeVarName("encTimeBase", "encoderTimeBase"),
  ...changeVarName("bsf", "bitStreamFilters"),
  ...changeVarName("fpre", "presetFile"),
  ...changeVarName("maxMuxingQueueSize", "maxBufferedPacketsDuringStreamInitialization"),
  ...changeVarName("dcodec", "dataCodec"),
  ...changeVarName("f", "format"),
  ...changeVarName("c", "codec"),
  ...changeVarName("pre", "preset"),
  ...changeVarName("t", "durationToTranscode"),
  ...changeVarName("to", "stopTranscodingAt"),
  ...changeVarName("fs", "fileSizeLimit"),
  ...changeVarName("ss", "startTimeSeekOffset"),
  ...changeVarName("sseof", "startTimeSeekOffsetRelativeToEOF"),
  ...changeVarName("timestampSeekingEnabled", "seekTimestamp"),
  ...changeVarName("timestamp", "recordingTimestamp"),

  { usage: "-metadata string=string" }, set("args", ["key", "value"]),

  ...changeVarName("target", "targetFileType"),
  ...changeVarName("apad", "audioPad"),
  ...changeVarName("frames", "framesToOutput"),
  ...changeVarName("filter", "filterGraph"),
  ...changeVarName("filterScript", "filterGraphScriptFile"),
  ...changeVarName("reinitFilter", "reInitializeFilterGraphOnInputChange"),
  ...changeVarName("s", "size"),
  ...changeVarName("sn", "disableSubtitles"),
  ...changeVarName("scodec", "subtitlesCodec"),
  ...changeVarName("stag", "subtitlesTag"),
  ...changeVarName("fixSubDuration", "fixSubtitlesDuration"),
  ...changeVarName("spre", "subtitlesPreset"),
  ...changeVarName("pixFmt", "pixelFormat"),
  ...changeVarName("rcOverride", "rateControlOverride"),
  ...changeVarName("passlogfile", "multiPassLogFileNamePrefix"),
  ...changeVarName("vtag", "videoTag"),
  ...changeVarName("streamid", "streamId"),
  ...changeVarName("hwaccel", "useHardwareAcceleratedDecoding"),
  ...changeVarName("hwaccelDevice", "hardwareAccelerationDevice"),
  ...changeVarName("hwaccelOutputFormat", "hardwareAcceleratedDecodingOutputFormat"),
  ...changeVarName("vbsf", "videoBitStreamFilters"),
  ...changeVarName("vpre", "videoPreset"),
  ...changeVarName("vframes", "videoFrames"),
  ...changeVarName("r", "frameRate"),
  ...changeVarName("aspect", "aspectRatio"),
  ...changeVarName("vn", "disableVideo"),
  ...changeVarName("vcodec", "videoCodec"),
  ...changeVarName("timecode", "initialTimecode"),
  ...changeVarName("vf", "videoFilters"),
  ...changeVarName("ab", "audioBitRate"),
  ...changeVarName("b", "bitRate"),
  ...changeVarName("dn", "disableData"),
]);

export function applyReplacements(
  helpOutput: HelpOutput<UserDataMap>
): HelpOutput<UserDataMap> {
  const modified = walk.mutate(helpOutput, (value, path) => {
    const before = util.inspect(value, { depth: 3, colors: true });
    const newValue = mapValue(value);
    if (value !== newValue) {
      const after = util.inspect(newValue, { depth: 3, colors: true });
      console.error(`Updated ${path.join(".")} from ${before} to ${after}`);
    }
    return newValue;
  });

  traverse(modified, (value, path) => {
    if (value === REMOVE) {
      const parent = get(modified, path.slice(0, -1));
      const lastComponent = path[path.length - 1];
      if (Array.isArray(parent)) {
        console.error(`Deleting array item at ${path.join(".")}`);
        parent.splice(lastComponent as number, 1);
      } else {
        console.error(`Deleting object property at ${path.join(".")}`);
        delete parent[lastComponent];
      }
    }
  });

  return modified;
}
