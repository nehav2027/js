const user = {
    username:'neha',
    logincount: 8,
    signedin: true,


    getuserdetails : function(){
        //console.log("Got user details from database");
        console.log(`username: ${this.username}`);
        
        

    }

}
//console.log(user.username);
console.log(user.getuserdetails());

function User (username, logincount,isloggedin){
    this.username = username
    this.logincount = logincount
    this.isloggedin = isloggedin

    return this

}

const userOne = new User("Neha", 10, true)
const userTwo = new User("Viha", 12, true)

console.log(userOne);
console.log(userTwo);


