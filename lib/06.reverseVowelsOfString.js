/**

345. Reverse Vowels of a String
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"


Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
 */


/**
 * @param {string} s
 * @return {string}
 */
export default function reverseVowels(s) {
  const stringList = s.split("");
  const vowelsList = [];
  let i = 0;

  while (i < stringList.length) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    if (vowels.includes(stringList[i])) {
      vowelsList.push(i);
      i++;
    }
  }

  const reversedVowels = vowelsList.reverse();
  console.log(reverseVowels);
  i = 0;

  while (i < stringList.length) {
    if (reversedVowels.includes(stringList[i])) {
      stringList[i] = reverseVowels[i];
      i++;
    }
  }

  return stringList.join("");
};