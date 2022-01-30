import { Preamble } from "./types";
import { reader } from "./reader";

const libVersionReader = reader({
  libName: /lib[^\s]+/,
  whitespace: /[ \t]+/,
  number: /\d+/,
  dot: ".",
  slash: "/",
});

export function parsePreamble(input: string): Preamble {
  const output: Preamble = {};

  const lines = input
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  for (const line of lines) {
    if (line.startsWith("ffmpeg version")) {
      output.version = line
        .replace(/^ffmpeg version /, "")
        .replace(/ Copyright[^]*$/, "");
    }

    if (line.startsWith("built with")) {
      output.builtWith = line.replace(/^built with /, "");
    }

    if (line.startsWith("configuration:")) {
      output.buildConfiguration = line
        .replace(/^configuration: /, "")
        .split(/\s+/g);
    }

    if (/^avcodec\s+configuration/.test(line)) {
      output.avcodecBuildConfiguration = line
        .replace(/^avcodec\s+configuration: /, "")
        .split(/\s+/g);
    }

    if (/^lib[^\s]+\s+\d/.test(line)) {
      const tokens = libVersionReader.read(line);

      const [libName, major, minor, patch, major2, minor2, patch2] = tokens
        .filter((tok) => tok.type === "libName" || tok.type === "number")
        .map((tok) => tok.value);

      if (!output.libraryVersions) output.libraryVersions = {};

      output.libraryVersions[libName] = [
        `${major}.${minor}.${patch}`,
        `${major2}.${minor2}.${patch2}`,
      ];
    }
  }

  return output;
}
