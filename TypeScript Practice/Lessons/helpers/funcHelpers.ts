//Reverse a String using a loop

export let str=(str1: string):string =>
{
    let reversed: string = "";
    for (let i=str1.length-1; i>=0; i--)
    {
        reversed += str1[i];
    }
    return reversed;
}

console.log(str('rajesh'))

//count vowels in a strong

/**
 let str: string = "Rajesh";
let reversed: string = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log(reversed);

 */