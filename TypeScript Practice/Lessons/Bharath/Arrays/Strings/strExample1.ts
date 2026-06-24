//STrings

let c1:string='rajesh davuluri';
let s2:string='a';
let s3:string='hello'

//console.log(c1);
//console.log(s2);

//console.log(c1[1])
console.log(c1.length)

//charAt() - To get the specific character throw index we can

//console.log(c1.charAt(4))
//console.log(s2.concat(c1))
//console.log(s2.concat(c1).concat(s3))

//uppercase() - convert all characters to Uppercase
//lowercase
//replace - To replace the any characters we use
//c1=c1.toUpperCase()
//console.log(c1)
//console.log(c1.toLowerCase())
//console.log(c1.replace('s', 'y'))
//console.log(c1.replace('rajesh', 'rohan'))
//console.log(c1.replace('rajesh', s3))
//console.log(c1.toLocaleUpperCase())
//--------------------------
//Split - to split anything in string we use
let str:string='this is playwright and typescript class';
//console.log(str.split('playwright'))
//console.log(str.split(' '))

//subString() - To get the specific gorup of characters we use

//console.log(str)
//console.log(str.substring(23))

//trim(): To remove the spaces in string we use

let str1: string = "this is automation  class"
console.log(str1)
//console.log(str1.trim())

// 10. indexof() - to find the index of the character in the given string
console.log(str1.indexOf('s'))
console.log(str1.lastIndexOf('s'))
console.log(str1.lastIndexOf('c',1))

//>> By using the backtick we can

let str3:string=`playweright class`
console.log(str3)
console.log(str3, " and ", str1)

//how to reverse

let st1:string = 'rajesh'
//onsole.log(st1.r)
let s:string=''
for (let i:number=st1.length-1; i>=0; i--)
{
    s=s+st1[i]
    console.log(s)
    }
console.log(s)

let str12:string = "Rajesh"; 
const reversed: string = [...str12].reverse().join(''); console.log(reversed);
console.log(reversed)