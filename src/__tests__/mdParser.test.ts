import { markdownParser } from "../index";

describe("Parsed markdown text", () => {
  // 見出し
  test("Parsed h1 text", () => {
    const h1Text = markdownParser("# h1text");

    expect(h1Text).toEqual("<h1>h1text</h1>");
  });
  // 強調
  test("Parsed strong text(Asterisk)", () => {
    const strongText = markdownParser("before**test**after");

    expect(strongText).toEqual("<p>before<strong>test</strong>after</p>");
  });
  test("Parsed strong text(UnderBar)", () => {
    const strongText = markdownParser("before__test__after");

    expect(strongText).toEqual("<p>before<strong>test</strong>after</p>");
  });
  // 斜体
  test("Parsed Italic text(Asterisk)", () => {
    const italicText = markdownParser("before*test*after");

    expect(italicText).toEqual("<p>before<em>test</em>after</p>");
  });
  test("Parsed Italic text(UnderBar)", () => {
    const italicText = markdownParser("before_test_after");

    expect(italicText).toEqual("<p>before<em>test</em>after</p>");
  });

  // 打ち消し線
  test("Parsed Strike text", () => {
    const strikeText = markdownParser("before~~test~~after");

    expect(strikeText).toEqual("<p>before<del>test</del>after</p>");
  });
});
