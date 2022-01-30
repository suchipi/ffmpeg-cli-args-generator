export function splitIntoChunks(input: string): Array<string> {
  const lines = input.split("\n");

  const chunks: Array<string> = [];
  let buffer = "";

  for (const line of lines) {
    if (line.trim().length === 0) {
      if (buffer.trim().length > 0) {
        chunks.push(buffer);
      }
      buffer = "";
    } else {
      buffer += line + "\n";
    }
  }

  return chunks.filter(Boolean);
}
