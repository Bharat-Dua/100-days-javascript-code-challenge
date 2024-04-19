//* ------------------------------------------
//* Programming question : Hash Tag generator
//* ------------------------------------------

//? You are required to implement a function generateHash that generates a hash tag from a given input string.The hash tag should be constructed as follows:

//? The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.
//? If the length of the input string is greater than 250 characters or if the input string is empty or contains only whitespaces, the function should return false.
//? ohterwise the function should return the generated hash tag prefixed with #.

//* Write a function generateHash to accomplish the task,

//* method 1  using replace method

const generateHash = (str) => {
  if (str.length > 250 || str.trim().length === 0) {
    return false;
  }
  str = str.split(" ");
  str = str.map((currElem) =>
    currElem.replace(currElem[0], currElem[0].toUpperCase())
  );
  str = `#${str.join("")}`;
  console.log(str);
  return str;
};

console.log(generateHash("hello world"));

//* Method 2

const generateHash = (str) => {
  if (str.length > 250 || str.trim().length === 0) {
    return false;
  }
  str = str.split(" ");
  str = str.map(
    (currElem) => currElem.charAt(0).toUpperCase() + currElem.slice(1)
  );
  str = `#${str.join("")}`;
  console.log(str);
  return str;
};

console.log(generateHash("hello world"));

//* Method 3

function generateHash(str) {
  if (str.length >= 280 || str.trim().length === 0) {
    return false;
  }
  const strUpperCase = str
    .split(" ")
    .map((curr) => curr.charAt(0).toUpperCase() + curr.slice(1))
    .join("");
  const hashStr = `#${strUpperCase}`;
  return hashStr;
}

//* Method 4

function generateHash(str) {
  if (str.length > 250 || str.length === 0) return false;
  let hash2 = str
    .trim()
    .split(" ")
    .map((ele) => ele.replaceAll(ele[0], ele[0].toUpperCase()))
    .join("");
  console.log(`#${hash2}`);
}

generateHash("hello my name is bharat");

//* Method 5 using reduce

function generateHash(str){
    if(!str.trim().length || str.length>=280){
        return false;
    } 
    const res = str.trim().split(" ").reduce((acc,elem)=>{
        return acc+elem.replace(elem.charAt(0),elem.charAt(0).toUpperCase());          
    },"#");
    return res;
}
console.log(generateHash("try programiz"));