let score = "33ac"

console.log(typeof score); // number 
console.log(typeof(score)); // number
 
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN not a number


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false 
// "hitesh" => ture

let someNumber = 33
console.log(someNumber);
console.log(typeof someNumber);

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ***************** operation ********************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2**3); // power 


let str1 = "hello"
let str2 = " Amogh"
let str3 = str1 + str2
console.log(str3);


console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100      //prefix and postfix
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion