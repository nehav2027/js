const coding =['js', 'ruby', 'java', 'python', 'cpp']

const values = coding.forEach((item) => {
    console.log(item);
    
})

// console.log(values);

const mynums = [1,2,3,4,5,6,7,8,9,10]

const newnumss = mynums.filter((num) => num>4)
// console.log(newnums);

const newnums =[]

mynums.forEach((num) => {
    if (num>4) {
        newnums.push()
    }
})
console.log(newnums);


const books = [
    {title: 'book1', genre:'fiction', publish:'1981', edition:1991},
    {title: 'book2', genre:'nonfiction', publish:'1989', edition:2001},
    {title: 'book3', genre:'history', publish:'1881', edition:1989},
    {title: 'book4', genre:'science', publish:'1986', edition:1996},
    {title: 'book5', genre:'fiction', publish:'1989', edition:2004}
]

const userbooks = books.filter ((bk) =>bk.genre === 'history')

console.log(userbooks);

