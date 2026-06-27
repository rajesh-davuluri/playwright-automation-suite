//MethodOverloading

class Demo
{
    sum(a:number, b:number):void;
    sum(tool:string, lang:string):VoidFunction;

    sum(x: number | string, y:number | string)
    {
           if(typeof x === 'number' && typeof y==='number') 
           {
            console.log("addtion value", x+y)
           }
           else
           {
            console.log(`course is ${x} and book is ${y}`)
           }

    }
}
let dem = new Demo();
dem.sum(20,'hello')