import { lexer } from "./lexer/index.js";
import { parse } from "./parser/index.js";

const generateHTML = (ast: any): string => ast.toString();

export const markdownParser = (markdown: string) => {
  const mdArray = lexer(markdown);
  const tokens = mdArray.map((md) => parse(md));
  const html = generateHTML(tokens);
  return html;
};

console.log(markdownParser("before\n**test**\nafter"));
