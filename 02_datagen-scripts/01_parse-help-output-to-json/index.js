const fs = require("fs");
const path = require("path");
const kame = require("kame");

const runtime = new kame.Runtime();

const mod = runtime.load(path.join(__dirname, "parse-help-output.ts"));

module.exports = mod;

if (module === require.main) {
  const input = fs.readFileSync(process.stdin.fd, "utf-8");
  const output = mod.parseHelpOutput(input);

  console.log(JSON.stringify(output, null, 2));
}
