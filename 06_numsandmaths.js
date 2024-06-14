// ************NUMS*****************

const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)
console.log(balance.valueOf()) // 100 // return value of the variable

console.log(balance.toString().length) // 3 // converts the number to string and then calculate the length.
console.log(balance.toFixed(2)) // 100.00 // In case of 100.120123 the precision value is more to fix it to a desired toFixed(2) is used to make it precise to 100.12 

const otherNumber = 23.835323
console.log(otherNumber.toPrecision(3)) // 23.8 // giving a precise number of length 3 therfore (23.8)

console.log(otherNumber.toPrecision(2)) // 24 // giving a precise number of length 2 by checking the value after decimal whether it is greater than 5 or not if yes then it will increase the 23 to 24 

console.log(1123.234.toPrecision(3)) 

const rupees = 1000000000
console.log(rupees.toLocaleString()) // 1,000,000,000 // as per the america standards by default
console.log(rupees.toLocaleString('en-IN')) // 1,00,00,00,000 // as per indian standards we can set it by giving the parameter which country 

console.log(Number.MIN_VALUE) // 5e-324
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
console.log(Number.MAX_SAFE_INTEGER) // 1.7976931348623157e+308
console.log(Number.EPSILON) // 2.220446049250313e-16
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991 
console.log(Number.NEGATIVE_INFINITY) // -Infinity
console.log(Number.POSITIVE_INFINITY) // Infinity

// *********Maths**********
console.log(Math)
console.log(Math.abs(-1))
console.log(Math.round(4.6))
console.log(Math.ceil(3.8))
console.log(Math.floor(1.2))
console.log(Math.min(2,3,5,1))
console.log(Math.max(2,2,4,65,324))
console.log(Math.sqrt(64))
console.log(Math.cbrt(125))
console.log(Math.random())
console.log(Math.floor(Math.random()*(100-50+1))+50)