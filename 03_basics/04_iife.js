//Immediately Invoked Function Expressions (IIFE)
(
function chai(){
    console.log  (`DB CONNECTED`)
    
})  ();


(
function chaiaur(){
    console.log  (`DB CONNECTED TWO`)
    
})  ();    // Named iife

(
(name)=>{
    (console.log  (`DB CONNECTED TWO ${name}`))
    
})  ('neha')   //Unamed iife