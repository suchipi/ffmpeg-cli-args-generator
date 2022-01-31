const fs = require("fs");
const path = require("path");
const kame = require("kame");

const runtime = new kame.Runtime();

const mod = runtime.load(path.join(__dirname, "index.ts"));

module.exports = mod;

if (module === require.main) {
  const inputStr = fs.readFileSync(process.stdin.fd, "utf-8");
  const input = JSON.parse(inputStr);
  const output = mod.patchHelpJson(input);

  console.log(JSON.stringify(output, null, 2));
}
