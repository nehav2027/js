/*
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is the best element");
        
    }
    console.log(element);
        
}

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    
     for (let j = 0; j <= 10; j++) {
        //console.log(`Inner loop value: ${j} and inner loop: ${i}`);
        console.log(i + '*' + j +' = ' + i*j );
        
        
     }
    
}
*/

let myarray =['batman', 'superman', 'spiderman']

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
}

// Break and continue

for (let index = 1; index < 20; index++) {

    if (index == 5) {
        console.log("5 is the best Number");
        break;
        
    }
    console.log(`Value of i is: ${index}`);
    
    
}

for (let index = 1; index < 20; index++) {

    if (index == 5) {
        console.log("5 detected");
        continue;
        
    }
    console.log(`Value of i is: ${index}`);
   
}