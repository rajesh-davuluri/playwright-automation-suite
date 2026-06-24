//Function is a block of code that perform the specific task
// 3 types of functions
//1. Named Function

/**function add1(num1, num2)
{
    let a:number=num1;
    let b:number=num2;
    let c:number=a+b;
    console.log(c);
}

add1(5,7)*/

//Anonymous function: 
//If we create any function by using only function keyword without name
//This function we are assigned into the variable, then variable is going to be act as the function name we run.

/**let sum:any = function (num1, num2)
{
    let a:number=num1;
    let b:number=num2;
    let c:number=a+b;
    console.log(c)
}

sum(5,6)
*/

//Arrow function
// Arrow and anonymous function are same
//If we create a any function by using goes tik operator(=>)
//That is call it as arrow function
//This will be used very often in typescript
//Syntax () =>


let sum =  (num1:number, num2:number):void =>
{
    let a:number=num1;
    let b:number=num2;
    let c:number=a+b;
    console.log(c)
}

sum(5,3)

