//Write a program to write a number in reverse order

let num:number=25614;
let rev:number=0;

while(num>0)
{
   let rem:number = num%10;
    rev = rev*10+rem;
    //console.log(rev)
    num=Math.floor(num/10);
    console.log(num)

}
console.log(rev)
