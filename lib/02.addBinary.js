/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 *
 *

02. Add Binary
Given two binary strings a and b, return their sum as a binary string.


Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
 */

function convertNumber(binaryNumber) {
  const splittedNumberList = binaryNumber.split("").reverse();
console.log(splittedNumberList)
  return splittedNumberList.reduce((acc, cur, index) => {
    console.log(acc, cur, index)
    acc += cur * (2 ** index);
    console.log("acc", acc)
  });
}

function convertBinaryNumber(number) {
  const changedBinaryNumberDigitList = number.toString().split("").map((digit, index) => {
    // 7을 계속 2로 나누어서 몫이 0이 될때까지 나눈뒤 나머지 나열
  });
}

export default function addBinary(a, b) {
  /**
   * 이진수로 주어지는 두 자리 수를 십진 수로 변환하여 더한 다음, 그 값을 다시 이진수로 표현하여라!
   */
  const numberA = convertNumber(a);
  const numberB = convertNumber(b);

  return convertBinaryNumber(numberA + numberB);
};