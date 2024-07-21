let nullVar = null
let undefinedVar = undefined

console.log(typeof null); // Writes object
console.log(typeof undefinedVar); // Writes undefined

let str = "33abc"
let numberStr = Number(str)

console.log("Type of numberStr: ", typeof numberStr);
console.log("Value of numberStr: ", numberStr);

/*  Even though numberStr is NaN, it's data type is shown as number 
    1. In case str is null, in that case numberStr will be 0.
    2. In case str is undefined, in that case numberStr will be NaN
    3. boolean value is converted into its corresponding value. True to 1 and false to 0
*/

// Converting boolean

let value = "sparsh"
let booleanValue = Boolean(value)
console.log("Boolean value: ", booleanValue)
console.log("Boolean data type: ", typeof booleanValue);

/*
    1. 1 => true
    2. 0 => false
    3. any other number => true
    4. "" => false
    5. "sparsh" => true
*/