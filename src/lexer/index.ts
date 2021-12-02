export type MdType = {
  id: number;
  type: string;
  content: string;
};

export const lexer = (markdown: string) => {
  const rawMdArray = markdown.split(/\r\n|\r|\n/);
  let mdArray: MdType[] = [];

  rawMdArray.forEach((line, index) => {
    if (line.length > 0) {
      const type = "text";
      const content = line;
      mdArray.push({
        id: index,
        type,
        content,
      });
    }
  });

  return mdArray;
};
