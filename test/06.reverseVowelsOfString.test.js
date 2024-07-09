// TODO: 문제 예시를 보고 직접 테스트 케이스를 작성해주세요.

import { expect } from "chai";
import reverseVowelsOfString from "../lib/06.reverseVowelsOfString.js";

describe("should pass all cases", function () {
  it("should pass base cases", function () {
    expect(reverseVowelsOfString("hello")).to.eql("holle");
    expect(reverseVowelsOfString("leetcode").to.eql("leotcede"));
  });
});
