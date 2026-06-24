//Write a program to reverse a string without using built-in methods

let str: string = "Rajesh";
let reversed: string = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log(reversed);
