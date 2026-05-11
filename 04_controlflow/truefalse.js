/*const useremail ="neha@google.com"

if (useremail) {
    console.log("Got user email");
    
} else {
    console.log("Don't have user email");
    
}

//falsy values

//false, 0, -0, BigInt 0n, " ", null, undefined, NaN

// Truthy Values

// "0", 'false', " ", [ ], {}, function(){}

if (useremail.length === 0) {
    console.log("Array is empty");
    
}

const emptyobj = {}

if (object.keys(emptyobj).length === 0){
    console.log("Object is empty");
    
}
*/
//Nullish Coalescing Operator (??) : nullundefined

let val1;
val1 = 5 ?? 10

console.log(val1);

let val2;
val2 = null ?? 10
console.log(val2);

let val3
val3 = undefined??15
console.log(val3);

// TERNARY OPERATOR 

//condition ? true : false

const iceteaprice =100
iceteaprice <= 80 ? console.log("Less than 80") : console.log("More than 80");


