// For loops using Array oncept
// Array is special datatype, which can store infinite values, 
//for loop, for in loop and for of loop
let arr1:number[]=[10, 20, 30, 40, 50, 60, 70, 80, 90];

//console.log(arr1)
//console.log(arr1[5])

/**for (let n:number=0; n<arr1.length; n++ )
{
    console.log(arr1[n])
}*/

//2. for in loop:
//syntax: for(const i in arrayname){}

/**for(const i in arr1)
{
    //console.log(i)
    console.log(arr1[i])
}*/

//3. for of loop for(const of array)
// in for of loop it loads values directly in defined variable

/**for(const i of arr1)
{
    console.log(i)
}*/

//forEach() it is a method in TS

arr1.forEach(value => console.log(value))