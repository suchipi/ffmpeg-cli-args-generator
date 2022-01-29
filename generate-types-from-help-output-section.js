const fs = require("fs");
const changeCase = require("change-case");

const data = fs.readFileSync("./help-output-section.txt", "utf-8");

const lines = data.split("\n");

const opts = lines.map((line) => {
  const [first, second] = line.split(/\s{2,99}/);
  const flag = first.split(/\s/)[0].trim();
  const description = second.trim();
  const usage = first.trim();

  const argsString =
    flag === usage ? "" : usage.replace(new RegExp("^" + flag + "\\s"), "");
  const args = argsString.split(/\s+/).filter(Boolean);

  return { flag, description, usage, args };
});

const str = JSON.stringify;

const outLines = opts.map(({ flag, description, usage, args }) => {
  let builderFn = "";

  if (args.length > 0) {
    builderFn = `(${args.map((arg) => arg + ": string").join(", ")}) => [${[
      str(flag),
      ...args,
    ].join(", ")}]`;
  }

  const keyVal = [
    changeCase.pascalCase(str(flag)),
    ': opt("UNKNOWN")(',
    [str(flag), builderFn].filter(Boolean).join(", "),
    "),",
  ].join("");

  const descr = `/**\n * ${usage}\n * \n * ${description}\n */`;

  return descr + "\n" + keyVal + "\n";
});

// Write to both stdout and stderr so I can redirect stdout to my clipboard but still see what the output looks like
console.error(outLines.join("\n"));
console.log(outLines.join("\n"));
