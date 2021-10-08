import { matchWithStrongRegxp } from "./strong";

type Token = {
  id: number;
  type: string;
  value: string;
  children: Token[];
};

const tokenize = (markdown: string): Token[] => {
  console.log("tokenize", matchWithStrongRegxp(markdown));

  return [] as Token[];
};

export const parse = (markdown: string) => {
  console.log(markdown);
  tokenize(markdown);
};
