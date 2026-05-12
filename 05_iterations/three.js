//for or loop

// [" ", " ", " "]  strings in Array
// [{ },{ }, { }]   objects in array

const arr = [1,2,3,4,5,6]

for (const num of arr) {
    //console.log(num);
    
}
const greetings = 'hello world'
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
    
}

//MAPS

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

const myobject ={
    'Game1': 'NFS',
    'Game2': 'Spiderman'
}

for (const [key,value] of myobject) {  // this won't show otput as myobject is not iterable   user object.entries(myobject)
    console.log(key, ':-', value);
}
