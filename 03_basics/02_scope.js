// var c = 300

// let a = 300
// if (true){
// let a = 10
// const b = 20
// var c = 30

// console.log("Inner: ", a);
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    //const username = "Neha"

    function two(){
        //const website ="Youtube"

        //console.log(username);
        
    }
    //console.log(website);
    //two()
}
//one()

if (true) {
    
    const username="Hitesh"

    if (username === "Hitesh") {
        const website = "Youtube"

       //console.log(username+website);
        
    }
    //console.log(website); // not in scope
    
}

//console.log(username); // not in scope

//=============================== INTERESTING ==========================================
console.log(addone(5))
function addone (num) {
    
    return num+1
    
}


addtwo(5) // ERROR cause function is declared in variable
const addtwo = function(num){
    return num+2
}
