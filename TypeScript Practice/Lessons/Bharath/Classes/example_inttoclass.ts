//How to create the Inheritance in interface to class

interface Animal
{
    name:string;
}
interface Dog extends Animal
{
    name:string;
}

class Cat implements Dog
{
    name:string;
    color:string
    constructor(name:string, color:string)
    {
        this.name=name;
        this.color=color
    }
    details():void{
        console.log(`my cat:${this.name} and color is ${this.color}`)
    }
}

let catdetails=new Cat('cat', 'white');
catdetails.details()
