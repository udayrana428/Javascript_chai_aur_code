const name = "uday"
const age = 22

console.log("my name is "+name+" and my age is "+age)

 // This is not a good approach for string building it is not efficient every time we need to use + for the concatenation of two strings rather we can use TEMPLATE LITERALS.

//  TEMPLATE LITERALS

// In javascript the  `${}` syntax is used inside backticks(``) is called a template literal or template String. The `${}` is specifically reffered as EXPRESSION INTERPOLATION within the template literal.

console.log(`My name is ${name} and my age is ${age}`)

// One more major use of template literal is Tagged Template

function tag(strings, ...values){
    console.log(strings)
    console.log(values)
    return "Processed string"
}

const result = tag`Hello ${name}, you are ${age} years old.`
console.log(result)

const gameName = new String('Uday')

console.log(gameName[2]) // a
console.log(gameName.__proto__); // {}

console.log(gameName.length) // 4
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3)) // y
console.log(gameName.indexOf("d")) // 1

const newString = gameName.substring(0,2) // in substring if we give negative values to the first parameter then it will not cosider it and assume it as 0 and starts with 0.
console.log(newString) // Ud

const anotherString = gameName.slice(1,3)
console.log(anotherString) // da

console.log(anotherString.slice(-2,4)) // da // In case of slice we can use negative values and it will start from end in reverse

const newStringOne = " hitesh  % 12 rana ? "
console.log(newStringOne)
console.log(newStringOne.trim()) // removes all the extra spaces
console.log(newStringOne.replace("rana","choudhary")) // replaces rana with choudhary
console.log(newStringOne.includes("rana"))// true // gives result in boolean true/false
const splitString = new String("i am uday rana")
console.log(splitString.split(" ")) // [ 'i', 'am', 'uday', 'rana' ] // It will split the string according to the seprator given in the parameter in this case " " is given as a seprator that means wherever the single space will occur it will seprate the string from there itself if another space will occur then again it will split





