function addTwoNumbers(n1, n2){
    return n1+n2;
}
// console.log(addTwoNumbers(10,5))


function loginUserMessage(username = "uday"){
    if(!username){
        console.log("please enter a username")
        return;
    }
    return `${username} just logged in!`
}

// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...item){
    totPrice = 0
    item.forEach((e)=>{
        totPrice += e
    })
    console.log("Values addition: ", val1+val2)
    return totPrice
}
// console.log(calculateCartPrice(123,4,5,34,25,342))
const user = {
    username: "uday",
    price: 2000
}
function handleObject(anyObject){
    if(!anyObject || !anyObject.username || !anyObject.price) {
        console.log("Either username or price is undefined ")
        return
    }
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user )

const myArr = [200, 500, 500, 230]

function returnSecondValue(arr){
    return arr[1]
}
// console.log(returnSecondValue(myArr))

// ++++++++++ Scope +++++++++++


var c = 300
if(true){
    let a = 10
    const b = 20
    let c = 30
}
// console.log(a) // cannot log because a is defined localy block scope
// console.log(b) // cannot log because b is defined locally block scope
// console.log(c) // Will use c which is 30 will log global c because of the var keyword 

const arr2 = [1,2,3,4,5,6,7,8,9]
const ind = 123
const i = 2343

for(let i=0; i<arr2.length; i++){
    const element = arr2[i]
    console.log(element)
}
console.log(i)






     