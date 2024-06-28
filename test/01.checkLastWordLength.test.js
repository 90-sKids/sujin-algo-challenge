import { expect } from "chai";
import checkLastWordLength from "../lib/01.checkLastWordLength.js";

describe("should pass all cases", function () {
  it("should pass base cases", function () {
    expect(checkLastWordLength("Hello World")).to.eql(5);
    expect(checkLastWordLength("   fly me   to   the moon  ")).to.eql(4);
    expect(checkLastWordLength("luffy is still joyboy")).to.eql(6)
  });

  // 예외 테스트를 추가해주세요~
});
