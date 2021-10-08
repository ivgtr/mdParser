import { markdownParser } from "../index";

describe("markdownParser", () => {
  test("should return an array of objects", () => {
    markdownParser("before**test**after");
  });
});
