const name = "uday"
const age = 22

console.log("my name is "+name+" and my age is "+age)

 // This is not a good approach for string building is is not efficient every time we need to use + for the concatenation of two strings rather we can use TEMPLATE LITERALS.

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

console.log(gameName[2])
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3)) 
console.log(gameName.indexOf("d"))

const newString = gameName.substring(0,2)
console.log(newString)

const anotherString = gameName.slice(1,3)
console.log(anotherString)


