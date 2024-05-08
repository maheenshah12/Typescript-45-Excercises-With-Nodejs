//DEFINE VARIBLE
let apple = "apple";
let  upperCaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ['apple', 'orange','pineapple'];
//test for equality and inquality with strings

console.log("\nis apple is equal to apple");
console.log(apple == "apple");

console.log("\nis apple is not equal to apple");
console.log(apple != "apple");

//test using the lower case function
console.log("is APPLE is equal to apple after converting to lowerCase");
console.log(upperCaseApple .toLowerCase() == "apple");

console.log("\nis APPLE is not equal to apple after converting to lowerCase");
console.log(upperCaseApple .toLowerCase() != "apple");

//numrerical tests
//equal to
console.log("\n is ten equal to twenty");
console.log(ten == twenty);
//not equal to
console.log("is ten is  not equal to twenty");
console.log(ten != twenty);
//greater than
console.log("\nis ten is greater than zero?")
console.log(ten > 0);
// less than
console .log("is twenty is less than ten?")
console.log(twenty < 10);
 //greater than and equal
 console.log("\nis ten is greater than or equal to 5?");
 console.log(ten >= 5);

 //less than or wqual to
 console.log("\n twenty is less than or equal to 10");
 console.log(twenty <= 10);

 //testes using 'end' & 'or'
//using &&
 console.log("\ntwenty is not equal to 10 and twenty is greater than 10" );
 console.log(twenty != 10 && twenty > 10);

 console.log("\ntwenty is not equal to 10 and twenty is greater than 10" );
 console.log(twenty != 10 && twenty > 30);
 //sing || (or)
 console.log("\n 20 is greater than 50 or 20 is equal to 20");
 console.log (20 > 50 || 20 == 20);

 console.log("\n 20 is greater than 50 or 20 is  not equal to 20");
 console.log (20 > 50 || 20 != 20);

//test whether an item is include in array
console.log("\nis orange include in my fruites array?");
console.log(fruits.includes("orange"));
//not include
console.log("\nis orange not include in my fruites array?");
console.log(!fruits.includes("orange"));



 
