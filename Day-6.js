// Write a function to determine whether a given string is a palindrome or not.A palindrome is a word,phrase,number,or other sequence of characters that reads the same forward and backward,ignoring spaces,punctuation,and capitalization.

//* method 1
const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/\W/g, "");
  const data = str.split("").reverse().join("");
  return str == data ? true : false;
};

//* method 2
function isPalindrome(str) {
  let first = str;
  let sec = str.split("").reverse().join("");
  // console.log(sec);

  if (first === sec) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

//* method 3

function check(str) {
  str = str.toLowerCase().replaceAll(/\W/g, "");
  let reverse = "";
  for (let index = str.length - 1; index >= 0; index--) {
    reverse += str[index];
  }
  if (reverse === str) return true;
  else return false;
  console.log(str);
}

console.log(isPalindrome("A man,a plan,a canal,panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
console.log(isPalindrome("hello")); // Outout: false

// --------------------
// Constraints:
// --------------------

// The input string may contain letters,digits,spaces,punctuation,and special characters.
// The function should be case-sensitive,meaning "Racecar" and "racecar" should be considered the same.
// Ignore spaces,puntuation, and special characters when determining if a string is a palindrome.
// The function should return true if the input string is a palindrome and false otherwise.
