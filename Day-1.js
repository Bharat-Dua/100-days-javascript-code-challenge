//* ------------------------------------------
//* Programming question : longest word in a  string
//* -----------------------------------------

//? Q: write a function findLongestWord that takes a string as input and returns the longest word in the string. if there are multiple longest words, return the first one encountered.

//* Constraints:

//?  The input string may contain alphabatic  characters (both lowercase and uppercase) ,  special characters, digits and spaces.
//? The input sting is non empty.
//? The input sting may contain multiple words sepretad by spaces.

//* Note :
//? If the input string is empty or contain only whitespace, the function should return an false.
//? The function should ignore leading and trailing whitespace when determining the longest word.

//* method 1

function findLongestWord(str) {
  if (typeof str !== "string" || !str.trim()) return null;

  let arr = str.split(" ");
  let maxLength = 0;
  let result;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
      result = arr[i];
    }
  }
  return result;
}

console.log(findLongestWord("Hello world"));
console.log(findLongestWord("I am learning JavaScript"));
console.log(findLongestWord("This is a test string with no space"));
console.log(findLongestWord("   "));

//* method 2  using reduce()

const findLongestWordReduce = (str) => {
  const trimStr = str.trim();
  if (!trimStr) return null;

  const longestWord = trimStr.split(" ").reduce((longest, word) => {
    return word.length > longest.length ? word : longest;
  }, "");

  return longestWord;
};

console.log(findLongestWordReduce("   "));
console.log(findLongestWordReduce("Hello world"));
console.log(findLongestWordReduce("I am learning JavaScript"));

//* method 3

const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }
  words = str.split(" ");
  words = words.sort((a, b) => {
    // return a.length - b.length; //for last word
    return b.length - a.length; //for first word
  });
  return words[0];
};

console.log(findLongestWord("This is a test string with no space")); //  'string'

//* method 4

function findLongestWord(str) {
  if (str.trim().length === 0) return false;
  let words = str.split(" ");

  return words.reduce(
    (accum, curWord) => (curWord.length > accum.length ? curWord : accum),
    ""
  );
}
findLongestWord();

//* method 5

function givebigstr(str) {
  let val = 0;
  let string = "";
  let arr = str.split(" ");

  arr.map((e) => {
    if (e.length > val) {
      string = e;
      val = e.length;
    }
  });
  return string;
}

givebigstr("hello world this is a big string");

//* method 6

let str = "My name is Owais Nadeem ";

function find_Largest_String(a) {
  if (a.trim() === 0) {
    let empty = "The string is empty !!!";
    return empty;
  } else {
    let words = a.split(" ");
    largest_str = words[0];
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > largest_str.length) {
        largest_str = words[i];
      }
    }

    return largest_str;
  }
}

let result = find_Largest_String(str);
console.log(result);

//* method 7 using for in

// Method 1 {Time Complexity - O(n)}.   Easy to understand and implement

function findLongestWord(str) {
  str = str.trim();
  let words_arr = str.split(" ");
  let longestWord = words_arr[0];
  for (i in words_arr) {
    if (longestWord.length < words_arr[i].length) {
      longestWord = words_arr[i];
    }
  }
  return longestWord;
}
console.log(findLongestWord(str));

// Method 2 {Time Complexity - O(nlogn)}.      More efficient

findLongestWord = (str) => {
  let words = str.split(" ");
  words.sort((a, b) => b.length - a.length);
  return words[0];
};
console.log(findLongestWord(str));

//* method 8

function longestWord(str) {
  let arr = str.split(" ");
  let maxLength = 0;
  let maxLengthWord = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].split("").length > maxLength) {
      maxLength = arr[i].split("").length;
      maxLengthWord = arr[i];
    }
  }
  console.log(maxLengthWord);
}
longestWord("this is a javascript tutorials");
