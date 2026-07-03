//Basic Interface

interface iPerson
{
    name:string;
    age:number;

}
let student:iPerson=
{
    name:'rajesh',
    age:34
}
let student2:iPerson=
{
    name:'suchandra',
    age:30
}

//console.log(student)
//console.log(student2.name)

//Optional Parameters (?)

interface Employer
{
    eid:number;
    ename:string;
    edept?:string;
}

let emp1:Employer=
{
    eid:101,
    ename:'rajesh',
}
console.log(emp1.eid)
console.log(emp1.edept)   

let emp2:Employer=
{
    eid:121,
    ename:'drajesh',
    edept:'rajesh'
}
console.log(emp2.eid)
console.log(emp2.edept)   

//Readonly
interface book{
    title:string;
    price:number

    display():void; //Abstract method
}

let b1:book=
{
    title:'Playwright',
    price:25000,
    display()
    {
        console.log(`book name is ${this.title} and the cost is ${this.price}`)
    }
}
console.log(b1.display())

//How to extends the interface in Typescript
interface Animal
{
    name:string;
}

interface Dog extends Animal
{
    color:string;
}

let d1:Dog=
{
    color:'Black',
    name:'bb'
}
console.log(d1.name)
console.log(d1.color)