const myNum = [1,2,3]

const mytotal = myNum.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
      
    return acc+currval
},0)


//const mytotal = mynums.reduce((acc) => acc+curr,0)
console.log(mytotal);

const shoppingcart =[
    {
        itemname:'js course',
        price: 299
    },
    {
        itemname:'Mobile dev course',
        price: 499
    },
    {
        itemname:'Data science course',
        price: 699
    }
]
const pricetopay = shoppingcart.reduce((acc,item)=> acc + item.price, 0)
console.log(pricetopay);
