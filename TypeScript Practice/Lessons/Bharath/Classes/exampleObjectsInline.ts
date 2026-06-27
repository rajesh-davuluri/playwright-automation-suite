//Inline Type Object

let student2:
{
    pname:string,
    pid:number,
    pphone:number,
    paddres:string,
}=
{
    pname:'rajesh',
    pid:3434,
    pphone:343333,
    paddres:'34334'
}

console.log(student2)


//Using Type aliases

type Product=
{
    name:string,
    price:number
}

let book:Product = 
{
    name:"playwright",
    price:2500
}

console.log(book.name)

let tv:Product = 
{
    name:"sony",
    price: 2000
}
console.log(tv)