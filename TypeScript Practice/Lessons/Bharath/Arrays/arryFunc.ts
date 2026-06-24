
const funct = ():void =>
{
    let arr:number[]=[2,3,4,5,6]
    arr.push(100,200)
    console.log(arr)
}

//funct()

const funct1 = ():void =>
{
    let arr1:number[] = [10,20,30,40,1]
    //arr1.pop()
    //arr1.push(200)
    arr1.slice(20)
    console.log(arr1.slice(2, -1))
}

funct1()

const funct2 = ():void =>
{
    let arr2:number[]=[10,20,30,40,50]
    arr2.splice(3,3,60,70)
    console.log(arr2)
}
//funct2()

const funct3=():void =>
{
    let arr3:number[]=[10,20,30,40,50,60,70]
    //arr3.push(1000)
    //arr3.shift()
    arr3.unshift(1000)
    console.log(arr3)
}

//funct3()

const funct4 = ():void =>
{
    let arr4:(number | string )[] = [12,'hello',3,'hi']
    console.log(arr4)
    let arr5:Array<any> = ['hello', 1, 5, 'hi', true, false]
    console.log(arr5)
}

//funct4()