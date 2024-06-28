import { expect } from "chai";
import heightChecker from "../lib/01.LengthOfLastWord.js";

describe("should pass all cases", function () {
  it.skip("should pass base cases", function () {
    expect(heightChecker([1,1,4,2,1,3])).to.eql(3);
    expect(heightChecker([5,1,2,3,4])).to.eql(5);
    expect(heightChecker([1,2,3,4,5])).to.eql(0)
  });
});
