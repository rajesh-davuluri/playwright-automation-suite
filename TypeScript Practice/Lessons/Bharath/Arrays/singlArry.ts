//Single Array

//1. Literal Array
let ar1:number[]=[2,3,5,20,40, 10];

let ar2:(number| string |boolean)[]=['hell', 20, 20.93,true,false ];


//2. Generic Array

let ar3:Array<any>=['hell', 20, 20.93,true,false ]

//console.log(ar2)

for(const i of ar2)
{
    console.log(i)
}
for (const j in ar2)
{
    console.log(j, ar2[j])
}
