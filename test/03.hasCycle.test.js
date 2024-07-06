import { expect } from "chai";
import hasCycle from "../lib/03.hasCycle.js";

describe("should pass all cases", function () {
  it.skip("should pass base cases", function () {
    expect(hasCycle([3,2,0,-4])).to.eql(true);
    expect(hasCycle([1,2])).to.eql(true);
    expect(hasCycle([1, -1])).to.eql(false);
  });

  // 예외 테스트를 추가해주세요~
});
