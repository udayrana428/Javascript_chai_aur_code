let score=33
let score2="33aa"
score2 = true
 
console.log(typeof score)
console.log(typeof(score))

 let valueInNumber = Number(score2)

 console.log(typeof valueInNumber)
 console.log(valueInNumber)

//  Conversion Basics(Number)

// "33" => 33 (number)
// "33ac" => NaN (number)
// "true" => 1; "false" => 0 (number)

let isLoggedIn=1
let isLoggedIn2=""

let booleanIsLoggedIn =Boolean(isLoggedIn)
console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn)

booleanIsLoggedIn = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn)

let name= "uday"
let booleanName= Boolean(name)
console.log(booleanName, typeof(booleanName))

// Boolean Conversion
 
// 1 => true; 0 => false
// "" => false
// "uday" => true

// String Conversion

let someNumber= 54
let stringSomeNumber = String(someNumber)
console.log(someNumber, typeof someNumber)
console.log(stringSomeNumber, typeof(stringSomeNumber))


// ******************Operations*************************
let value = 3
let negValue = -value
console.log(negValue)

// Basic Operation

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2**2)
console.log(2%3)

let str1= "uday"
let str2= " rana"
let str3 = str1+str2
console.log(str3)

console.log("1"+2) //in this 1(string) is concatenated with 2(number)
// Note: if 1st is string then another will convert to string //12

console.log(1+"2") // in this 1(number) is concatenated with 2(string)
// Note: While in case of number if 1st is number and another is string then it will be concatenated //12

console.log("1"+2+2) // in this 1(string) and next one is 2(number) it will be concatenated and another will also concatenated 2(number) //122

console.log(1+2+"2") // In first 1 is added to 2 which make it 3 and then it will be concatenated with 2 // 32

let num1, num2, num3
num1=num2=num3 =2+2

console.table([num1,num2, num3])

let gameCounter =100
console.log(gameCounter)
gameCounter++
console.log(gameCounter)
++gameCounter
console.log(gameCounter)

