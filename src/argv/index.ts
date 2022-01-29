import { Fragment, Option, OptionScope } from "./option";
import {
  AudioAdvanced,
  Audio,
  Common,
  GlobalAdvanced,
  Global,
  Help,
  Info,
  PerFileAdvanced,
  PerFile,
  Subtitle,
  VideoAdvanced,
  Video,
} from "./options";
import { makeArgs as make } from "./make-args";

export { make };

export type { Fragment, Option, OptionScope };

export const opts = {
  ...Info,
  ...Help,
  ...Common,
  ...GlobalAdvanced,
  ...Global,
  ...PerFileAdvanced,
  ...PerFile,
  ...AudioAdvanced,
  ...Audio,
  ...VideoAdvanced,
  ...Video,
  ...Subtitle,
};
