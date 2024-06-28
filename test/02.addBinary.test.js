import { expect } from "chai";
import addBinary from "../lib/02.addBinary.js";

describe("should pass all cases", function () {
  it("should pass base cases", function () {
    expect(addBinary("11", "1")).to.eql("100");
    expect(addBinary("1010", "1011")).to.eql("10101");
  });

  // 예외 테스트를 추가해주세요~
});
