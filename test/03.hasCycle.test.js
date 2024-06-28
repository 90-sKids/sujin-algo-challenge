import { expect } from "chai";
import hasCycle from "../lib/03.linkedListCycle";

describe("should pass all cases", function () {
  it("should pass base cases", function () {
    expect(hasCycle([3,2,0,-4], 1)).to.eql(true);
    expect(hasCycle([1,2], 0)).to.eql(true);
    expect(hasCycle([1, -1])).to.eql(false);
  });

  // 예외 테스트를 추가해주세요~
});
