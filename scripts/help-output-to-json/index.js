const fs = require("fs");
const path = require("path");
const kame = require("kame");

const runtime = new kame.Runtime();

const mod = runtime.load(path.join(__dirname, "src", "parse-help-output.ts"));

module.exports = mod;

if (module === require.main) {
  const input = fs.readFileSync(
    path.join(__dirname, "..", "..", "help-output.txt"),
    "utf-8"
  );
  const output = mod.parseHelpOutput(input);

  console.log(output.preamble);
  // console.log(JSON.stringify(output, null, 2));
}
