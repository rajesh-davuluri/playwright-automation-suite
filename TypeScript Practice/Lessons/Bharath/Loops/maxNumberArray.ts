let arr1:number[]=[1,10,25,15,0, 45,40,12];
let maxn:number=0;

/**for(let n:number=0; n<arr1.length; n++)
{
    if (maxn < arr1[n])
    {
        maxn=arr1[n]
    }
}
*/
for(const i of arr1)
{
    if(maxn < i)
    {
        maxn = i
    }
}
console.log(maxn)