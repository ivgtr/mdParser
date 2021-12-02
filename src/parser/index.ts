import { MdType } from "../lexer/index.js";
import { matchWithStrongRegxp } from "./strong.js";

export type Token = {
  id: number;
  type: string;
  value: string;
  children: Token[];
};

const tokenize = (markdown: string): Token[] => {
  switch (true) {
    case !!matchWithStrongRegxp(markdown):
      const token = matchWithStrongRegxp(markdown) as any;
      return token as Token[];
  }

  return [] as Token[];
};

export const parse = (mdArray: MdType) => {
  console.log(mdArray);
  const token = tokenize(mdArray.content);
  return token;
};
