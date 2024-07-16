// Singleton - An object is called singleton if made with constructor

const obj = Object.create(null) // This is an example of creation of object using singleton.

// Object Literals - An object which is not made with constructor is called object literals

const jsUser = {} // This is the syntax of create a object using object literals. This is an empty object.

const mySym = Symbol("key1")

const obj2 = {
    name: "Uday",
    age: 22,
    // mySym: "symbolKey",
    [mySym]: "symbolValue",
    location: "nagpur",
    email: "uday@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondays", "Saturday"]
}

// To access the data we can use approaches

console.log(obj2.email) // This will print the email without any issue
// console.log(obj2[email]) // This will cause issue while printing email is not defined, in order to access the value of email using [] we need to give the key as a string.
console.log(obj2["email"]) // This will print the value of the email

console.log(obj2.mySym) // It will print undefined
console.log(typeof obj2.mySym) // undefined 
console.log(obj2[mySym]) // It will print data
console.log(typeof obj2[mySym]) // string 

obj2.email = "gaurav@gmail.com"

console.log(obj2)

// Object.freeze(obj2) // It will disable the object to be manipulated further

obj2.email = "raj@gmail.com"

console.log(obj2)

obj2.greeting = function () {
    console.log(`Hello! ${this.name}.`)
    return 0;
}


console.log(obj2.greeting) // It will give the reference of the function

obj2.name = "raj";

console.log(obj2.greeting()) // It will print the log statement and return whatever return part of the function. If not return anything then simply return undefined.

obj.name = "uday"

console.log(obj)

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "uday",
            lastname: "rana"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)
console.log(regularUser.fullname.userfullname.lastname)

const ob1 = { 1: "a", 2: "b" }
const ob2 = { 3: "c", 4: "d", name: "uday" }

const ob3 = { ob1, ob2 } // It will not concat properly 
console.log("ob3 ", ob3)
console.log(ob3.ob2.name)
console.log(ob3.ob2[3]) // in case of key is number then use [] to access the value . will not work.

// To concat properly we need to use 

// Spread operator
const ob4 = { ...ob1, ...ob2 }
console.log("ob4 ", ob4)

// Object.assing()
const ob5 = Object.assign({}, ob1, ob2) // here {} is a target and ob1, ob2 are the sources that means all the key value pairs of ob1 and ob2 will assign to {} empty object.
// It will return target element.
console.log("ob5 ", ob5)

const users = [
    {
        id: 1,
        name: "uday"
    },
    {
        id: 2,
        name: "pankaj"
    },
    {
        id: 3,
        name: "achal"
    },
    {
        id: 4,
        name: "raj"
    },
]

users.map((e)=>{
    console.log(e.name)
})

console.log(tinderUser)

console.log(Object.keys(tinderUser)) // returns all the keys in the form of array
console.log(Object.values(tinderUser)) // returns all the values in the form of array
console.log(Object.entries(tinderUser)) // returns all the key, value as array of array

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// Destructuring

const course = {
    courseName: "js in hindi",
    price: 888,
    courseInstructor: "uday"
}

// bad approches to access the data
console.log(course.courseName)
console.log(course.price)
console.log(course.courseInstructor)

// good approach to access the data
const {courseName, price, courseInstructor} = course // we are destructuring the keys from the object so that we can use it further 
console.log(courseName, price, courseInstructor)

const {courseInstructor: instructor} = course
console.log(instructor) // This is the naming convention of any key if we want to give it 

const navbar = (props) =>{
    console.log(props.company)
}

navbar({company: "valethi"})


// JSON 

// {
//     "prodId": "123abc",
//     "prodName": "Raza",
//     "price": 5000
// }

// Array of objects

// [
//     {

//     },
//     {

//     },
//     {

//     },
// ]

 
 


 

