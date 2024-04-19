//* ------------------------------------------
//* Interview Question :- Count Occurences of Character
//* ------------------------------------------

//! Task:
//? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

console.log(countChar("Hello World", "l")); // Output:- 3

//todo constraints:
//? The function should be case sensitive.
//? The function should handle both lowercase and uppercase letters.
//? The character parameter can be any printable ASCII character(the function should accept any character that is part of the ASCII character set and is printable).


//* method 1 

function countChar(str,value){
    str=str.toLowerCase()
    value = value.toLowerCase();
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i].includes(value)){
            count++;
        }
    }
    return count;
}
console.log(countChar('bhaAArat','A'));
console.log(countChar('bhaArat','e'));

//* method 2  using reduce 


function countChar(word,char){
    word=word.toLowerCase();
    char=char.toLowerCase();

    totalCount = word.split("").reduce((accum,curChar)=>{
        if(curChar===char){
            accum++;
        }
        return accum;
    },0);

    return totalCount;
}

console.log(countChar("Hello World","o"));


//* method 3

const countChar = (str, word) => {
    str = str.split('');
  
    str = str.filter((item) => item.toUpperCase() === word.toUpperCase());
  
    str = str.length;
  
    return str;
  };
  
  console.log(countChar('Mississippi', 'I')); 