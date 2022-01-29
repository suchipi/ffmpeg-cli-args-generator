import { Option, Fragment } from "./option";

export function makeArgs(
  ...inputs: Array<Fragment<any> | Option<any, []>>
): Array<string> {
  return inputs
    .map((input) => {
      if (typeof input === "function") {
        return input();
      } else {
        return input;
      }
    })
    .filter(Boolean);
}
