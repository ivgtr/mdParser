type Token = {
  id: number;
  type: string;
  value: string;
  children: Token[];
};

const tokenize = (markdown: string): Token[] => {
  console.log("tokenize", markdown);

  return [] as Token[];
};

export const parse = (markdown: string): string => {
  const tokens = tokenize(markdown);
  const ast: string = parseTokens(tokens);

  return ast;
};
