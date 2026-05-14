let btn1 = document.querySelector('#btn1');

// btn1.onclick = (evt) => {
//    console.log(evt);
//    console.log(evt.type);
//    console.log(evt.target);
//    console.log(evt.clientX, evt.clientY);
   
   
// };

// Node.event = () =>{
//     handle here
// }

btn1.addEventListener("click", (evt) => {
    console.log('Button 1 was clicked');
    console.log(evt);
    console.log(evt.type);
    
    
})

btn1.addEventListener("click", () => {
    console.log('Button 1 was clicked - Handler 1');
    
})

btn1.addEventListener("click", () => {
    console.log('Button 1 was clicked - Handler 2');
    
})
btn1.addEventListener("click", () => {
    console.log('Button 1 was clicked - Handler 3');
    
})
btn1.addEventListener("click", () => {
    console.log('Button 1 was clicked - Handler 4');
    
})

btn1.removeEventListener("click", () => {
    console.log('Button 1 was clicked - Handler 3');
    
})



let box = document.querySelector('div');
