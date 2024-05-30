"use strict"; // treat all js code as newer version

// alert(2+3) we are using nodejs not browser that's why alert will not work here

// Code Readibility

console.log("uday"); console.log("rana") // This is not a correct approach to write code this is not readible clearly so we don't use this type of approach

console.log(3+
    3, "uday"
) // This is also not a good approach

// Note: Alaways try to write the code properly so that is should be readble and also easily understable by other programmer.


// Datatypes

let name = "uday"
let age = 18
let isLoggedIn = false

// number => 2 to power 53
// bigint (specially used in stocks where big number are used)
// string => "uday"
// null => standalone value
// undefined => It means that the variable is declared but not assigned any value
// symbol => To find the uniqueness of any component this datatype is used

//object => This type of datatype stores key value paired data eg. {"name":"uday"}

console.table([{"Number":typeof(8)},{"String":typeof("uday")},{"Boolean":typeof(true)},{"Null":typeof(null)},{"Undefined":typeof(undefined)}])

console.table([typeof(8),typeof("uday"),typeof(null),typeof({"name":"aman"}),typeof(true)])

// Datatypes are of 2 types Primitive and Non-Primitive

// Primitive (Call By Value)

// There are 7 types of primitive datatype := 
// String, Number, Boolean, Null, Undefined, Symbol, BigInt
const outsideTemp = null
let userEmail
const id = Symbol("123")
const anotherId = Symbol("123")
const bigNumber = 912342348103n

console.log(outsideTemp, typeof(outsideTemp), userEmail, typeof(userEmail), id, typeof(id), id==anotherId, typeof(id==anotherId), bigNumber, typeof(bigNumber))

// Non-Primitive (Call By Reference)
 
// Arrays, Objects, Functions

const heros =["salman","sharukh", "akshay"]

let myObj = {
    name : "uday",
    age : 22,
    gender : "male"
}

function greet(name){
    console.log("Good evening ",name)
}

console.log(heros,typeof(heros),myObj,typeof(myObj),greet("uday"),typeof(greet),typeof(greet("uday")))




