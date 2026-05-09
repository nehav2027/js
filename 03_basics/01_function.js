/*FUNCTION = A function in JavaScript is a block of code that performs a specific task.
Instead of writing the same code again and again, we put it inside a function and call it whenever needed.

function myfunc(){
    console.log("N");
    console.log("E");
    console.log("H");
    console.log("A");   
}

myfunc() // To execute the function


function addtwonum(num1, num2){
   console.log(num1+ num2);
}

function addtwonum(num1, num2){
   let result = num1+num2
   return result
}

// addtwonum(2,null)

const result = addtwonum(2,3)
console.log("result:", result);

function loginusermessage(username){
    if(username===undefined){    // if (!username)
        console.log("Please enter username");
        return
        
    }
     return `${username} just logged in `
}
console.log(loginusermessage("Hitesh"))
console.log(loginusermessage())

// =============================== LECTURE 2 ====================================
// ... rest operator
function calculatecartprice(...num1){
    return num1
}

// console.log(calculatecartprice(200,400,500 ))

const user={
    username: "Neha",
    price: 199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    }

handleobject(user)    
handleobject({
    username:"sam",
    price: 199
})   

const mynewarray =[100, 200, 300]

function returnsecondvalue(getarray){
return getarray[1]
}
console.log(returnsecondvalue(mynewarray));

console.log(returnsecondvalue([100, 200, 300]));
*/ 

