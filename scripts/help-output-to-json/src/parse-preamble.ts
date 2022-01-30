import { Preamble } from "./types";

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
      output.buildConfiguration = line.replace(/^configuration: /, "");
    }

    if (/^avcodec\s+configuration/.test(line)) {
      output.avcodecBuildConfiguration = line.replace(
        /^avcodec\s+configuration: /,
        ""
      );
    }

    if (/^lib[^\s]+\s+\d/.test(line)) {
      const [libName, major, minor, patch, major2, minor2, patch2] =
        line.split(/\s|[.]|\//g);
      if (!output.libraryVersions) output.libraryVersions = {};

      output.libraryVersions[libName] = [
        `${major}.${minor}.${patch}`,
        `${major}.${minor}.${patch}`,
      ];
    }
  }

  return output;
}
