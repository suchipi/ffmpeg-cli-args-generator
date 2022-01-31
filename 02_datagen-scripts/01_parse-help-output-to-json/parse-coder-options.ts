import { CoderOption, CoderOptionChild } from "./types";

function makeOption(): CoderOption {
  return {
    is: "CoderOption",
    name: "unnamed",
    type: "<no type>",
    description: "no description",
    contexts: [],
    children: [],
    userData: undefined,
  };
}

function makeChild(): CoderOptionChild {
  return {
    is: "CoderOptionChild",
    name: "unnamed",
    description: "no description",
    contexts: [],
    userData: undefined,
  };
}

export function parseCoderOptions(lines: Array<string>): Array<CoderOption> {
  const options: Array<CoderOption> = [];

  let lastIndent = -1;
  let mode: "option" | "child" = "option";

  for (const line of lines) {
    const lineWithoutTabs = line.replace(/\t/g, "  ");

    const currIndent =
      lineWithoutTabs.length - lineWithoutTabs.replace(/^\s+/, "").length;

    const indentChange =
      lastIndent === -1
        ? "initial"
        : currIndent === lastIndent
        ? "unchanged"
        : currIndent > lastIndent
        ? "increased"
        : currIndent < lastIndent
        ? "decreased"
        : "uhhh this shouldn't happen :)";
    lastIndent = currIndent;

    function readOption() {
      const option = makeOption();
      const [_, flag, type, contexts, ...descriptionWords] =
        lineWithoutTabs.split(/\s+/g);

      option.name = flag;
      option.type = type.replace(/^</, "").replace(/>$/, "");

      for (const char of contexts.split("")) {
        if (char !== ".") {
          option.contexts.push(char);
        }
      }

      option.description = descriptionWords.join(" ");
      return option;
    }

    function readChild() {
      const child = makeChild();
      const [_, name, contexts, ...descriptionWords] =
        lineWithoutTabs.split(/\s+/g);

      child.name = name;
      for (const char of contexts.split("")) {
        if (char !== ".") {
          child.contexts.push(char);
        }
      }

      child.description = descriptionWords.join(" ");
      return child;
    }

    function lastOption() {
      return options[options.length - 1];
    }

    const state = mode + " " + indentChange;
    switch (state) {
      case "option initial":
      case "option unchanged": {
        const option = readOption();
        options.push(option);
        break;
      }

      case "option increased": {
        mode = "child";
        const child = readChild();
        lastOption().children.push(child);
        break;
      }

      case "child unchanged": {
        const child = readChild();
        lastOption().children.push(child);
        break;
      }

      case "child decreased": {
        mode = "option";
        break;
      }

      default: {
        throw new Error(`Unhandled coder section state: ${state}`);
      }
    }
  }

  return options;
}
