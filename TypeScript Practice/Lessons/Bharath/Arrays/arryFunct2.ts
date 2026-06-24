//for each

const funct1 = ():void =>
{
    let arr1:number[]=[45,55,123,10,20,30,40,50,60,70, 11,31]
    console.log(arr1)
    console.log("--------------")
    /**arr1.forEach((arr) =>
    {
        console.log(arr/2)
    })
    console.log("---------------")
    for(let arr of arr1)
    {
        console.log(arr*2)
    }
    let arr2=arr1.map(n => n*2)
    console.log(arr2)
    console.log(arr1)


//console.log(arr1.slice(2,4))
console.log("-----------")
//arr1.sort((a,b)=>a-b)
arr1.sort((a,b)=> b-a)
console.log(arr1)
*/
//console.log(arr1.every(n => n%2==0))
//console.log(arr1.some(n => n%2==0))
let arr_even = arr1.filter(n => n%2==0)

console.log(arr_even)
}
funct1()
