import * as moo from "moo";

export function reader<Config extends {}>(config: Config) {
  const lexer = moo.compile(config);

  return {
    read(str: string): Array<{ type: keyof Config; value: string }> {
      lexer.reset(str);

      const results: Array<{ type: keyof Config; value: string }> = [];

      let result = lexer.next();
      while (result) {
        results.push(result as any);
        result = lexer.next();
      }

      return results;
    },
  };
}
