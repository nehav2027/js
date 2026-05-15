const promiseone = new Promise(function(resolve,reject){
    //do an async task
    //db calls, cryptography, network
    setTimeout(function() {
        console.log("Async task is complete");
        resolve()
    }, 1000);
})

promiseone.then(function(){
    console.log("promise consumed");
    
})

//promise 2

new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("async task 2");
        resolve()

    },1000)
    
}).then(function(){
    console.log("async 2 resolved");
    
})

//promise 3

const promisethree = new Promise(function (resolve,reject){
    setTimeout(function(){
        resolve({username:"chai", email:"chai@exanple.com"})

    },1000)
})

promisethree.then(function(user){
    console.log(user);
})

//promise 4
const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username:"Viha", password: 12345})
        } else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

const username = promisefour
.then((user)=>{
    console.log(user);
    return user.username
    
})
.then((username)=>{
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
}).finally(() => console.log("The promise is either resolved or rejected "))

//promise 5

const Promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username:"Neha", password: 123456})
        } else{
            reject("ERROR: JS went wrong")
        }
    },1000)

})
async function consumePromisefive (){
    const response = await Promisefive
    console.log(response);
    
};

async function  consumePromisefive(){
    try {
        const response = await Promisefive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}
consumePromisefive()

async function getallusers() {
    try{
    const response = await fetch ('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
    }
    catch(error){
        console.log("E: ",error);
        

    }
}

getallusers()
