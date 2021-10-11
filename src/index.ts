import { parse } from "./parser/index";

const generateHTML = (ast: any) => ast.toString();

export const markdownParser = (markdown: string) => {
  const mdArray = markdown.split(/\r\n|\r|\n/);
  const mdNodeArray = mdArray.map((md) => parse(md));
  const html = generateHTML(mdNodeArray);
  return html;
};
