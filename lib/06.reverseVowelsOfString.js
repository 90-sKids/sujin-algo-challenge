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
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  for (let i = 0; i < stringList.length; i++) {
    if (vowels.includes(stringList[i])) {
      vowelsList.push(i);
    }
  }

  let left = 0;
  let right = vowelsList.length - 1;

  while (left < right) {
    const temp = stringList[vowelsList[left]];
    stringList[vowelsList[left]] = stringList[vowelsList[right]];
    stringList[vowelsList[right]] = temp;
    left++;
    right--;
  }

  return stringList.join("");
};