// const myArr = [0,1,2,3,4,4]

// const myHeros = ['ironman', 'thor']

// const myArr2 = new Array(7,8,9)
// console.log(myArr[0]);

// // ******** Array Methods *************

// myArr.push(6)
// myArr.push(7)
// console.log(myArr)

// myArr.pop()
// console.log(myArr)

// myArr.unshift(8)
// console.log(myArr)

// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(4))

// const newArr = myArr.join("_")
// console.log(newArr)


// console.log(typeof newArr) // string // Because we are using here join() method here it will convert the array into string seprated by the symbol which has been given as a parameter.

// console.log("Original: ",myArr)

// const newArr1 = myArr.slice(1,3)
// console.log("Slice: ", newArr1)
// console.log("Original Array after slice: ", myArr)

// const newArr2 = myArr.splice(1,3)
// console.log("Splice: ", newArr2) // It will manipulate in the original array

// console.log("Original Array after splice: ", myArr) 

const marvelHeros = ["thor", "ironman", "spiderman"]

const dcHeros = ["superman", "flash", "batman"]

//  marvelHeros.push(dcHeros) 
//  console.log(marvelHeros) //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] // It will add the dcHeros to marvelHeros as an element not the whole element of the dcHeros into the marvelHeros

const mixHeros = marvelHeros.concat(dcHeros)
console.log(mixHeros) // If we store the concatenation of 2 arrays in a variable and log that then all the elements of both the array are combined as a single array.

// In order to achieve the same functionality we can use the concept of Spread Operator.

const mixHeros2 = [...marvelHeros, ...dcHeros] // It will spread both arrays elements as individuals and make a single array consisting all the elements of both the array
console.log(mixHeros2)

const anotherArr = [1,2,3,[4,5,6],7,[8,[9,10]]]

console.log(anotherArr[5])

const realAnotherArr = anotherArr.flat(Infinity)
console.log(realAnotherArr) // In the anotherArr elements are arranged in different dimensions due to flat() method all the elements will get distributed and make one single array having all the elements.

console.log(Array.isArray("Uday"))

console.log(Array.from("Uday"))
console.log(Array.from({name: "Uday"})) // Interesting

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3)) // Array.of() method will take the multiple data as an argument and make the an arrays elements 

 
