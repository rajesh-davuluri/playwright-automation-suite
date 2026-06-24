//Fibonacci Series 
let i:number=0
let j:number=1
//console.log(i)
/**for(let n:number=0; n<10; n++)
{
    console.log(i)
    let temp = i+j;
    i=j;
    j=temp;

}*/
/**for(let n:number=0; n<100; n++)
{
    
    let temp = i+j;
    i=j;
    j=temp;
    if(temp >200)
    {console.log(i)
        break;
    }
    console.log(i)
}*/
let temp:number=0
let s : string = "0"
while (temp <100)
{
   s += " " +j
    temp=i+j;
    i=j;
    j=temp;
    
}
console.log(s)

