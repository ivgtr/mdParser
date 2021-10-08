import { parse } from "./parser/index";

export const markdownParser = (markdown: string) => {
  const mdArray = markdown.split(/\r\n|\r|\n/);
  const mdNodeArray = mdArray.map((md) => parse(md));
  return mdNodeArray;
};
