//*---------------------------
//* Interview Question:
//*--------------------------

//? Write a function called checkTriangleType that takes threee parameters representing the lenghts of the sides of a trianle. The function should return a string indicating the type of triangle: "equilaternal","isosceles", or "scalene".
const checkTriangleType = (side1, side2, side3) => {
  if (side1 === side2 && side2 === side3) return "Equilateral";
  if (side1 === side2 || side2 === side3 || side1 === side3) return "Isosceles";
  if (side1 !== side2 || side2 !== side3 || side1 !== side3) return "Scalene";
};

console.log(checkTriangleType(2, 3, 4));
console.log(checkTriangleType(3, 3, 3)); // Output: "equilaternal";
console.log(checkTriangleType(3, 4, 3)); // Output: "isosceles";
console.log(checkTriangleType(5, 8, 6)); // Output: "scalene";

//todo the function should adhere to the following rules:

//? If all three sides are of equal length, return "equilaternal";
//? If only  two sides are of equal length, return "isosceles";
//? If no sides are of equal length, return "scalene"
