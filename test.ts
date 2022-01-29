import { input, output, connect, opts } from "./src";

const args = connect({
  inputs: [
    //
    input("./input.flv", opts.FrameRate(24)),
    input("./song.mp3", opts.AudioBitrate("320k")),
  ],
  output: output("./output.mp4", opts.VideoCodec("libx264")),
});

console.log("ffmpeg " + args.join(" "));
