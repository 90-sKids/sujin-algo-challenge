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
  const splittedNumberList = binaryNumber.split("").reverse().map(Number);

  return splittedNumberList.reduce((acc, cur, index) =>
    acc + cur * (2 ** index)
  );
}

function convertBinaryNumber(number) {
  /**
   * 십진수를 2로 나누고 나머지를 기록
   * 몫을 다시 2로 나누고 나머지를 기록
   * 몫이 0이 될 때까지 이 과정을 반복
   * 기록한 나머지들을 역순으로 읽기
   */

  let copyNumber = number;
  let binaryNumber = '';

  while (copyNumber > 0) {
    binaryNumber = (copyNumber % 2) + binaryNumber;
    copyNumber = Math.floor(copyNumber / 2);
  }

  return binaryNumber;
}

export default function addBinary(a, b) {
  /**
   * 이진수로 주어지는 두 자리 수를 십진 수로 변환하여 더한 다음, 그 값을 다시 이진수로 표현하여라!
   */
  const numberA = convertNumber(a);
  const numberB = convertNumber(b);

  return convertBinaryNumber(numberA + numberB);
};