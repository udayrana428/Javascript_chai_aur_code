// Basic Comparator

console.table([2>1,2<1,2>=1,2<=1,2==1,2!=1])

console.log("2">1)
console.log("02"<1)

// We need to avoid Null and Undefined comparator.

// Null Comparator logic

console.table([null>0,null==0,null>=0]) // here 1st and 2nd will return (false) because of as it is comparator it first convert the null to (0). Therefore in 3rd value it returns (true) as null is 0 null(0)>=0 is equals to true.

// undefined Comparator logic
// Whereas in case of undefined if it is compared with 0 then it will return false

console.table([undefined==0,undefined>0,undefined<0])

// === and == comparator

console.table([2===2,2==="2",2==2,2=="2"]) // In case of == equals only "VALUE" is compared whereas in case of === both "VALUE" and "DATATYPES" is compared.
