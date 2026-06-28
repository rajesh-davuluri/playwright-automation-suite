// Reverse a string using different function approaches

// 1. Regular function
function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

// 2. Arrow function
const reverseArrow = (str: string): string => str.split('').reverse().join('');

// 3. Using a loop
function reverseWithLoop(str: string): string {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// 4. Using recursion
function reverseRecursive(str: string): string {
  if (str.length <= 1) return str;
  return reverseRecursive(str.slice(1)) + str[0];
}

// Test all approaches
const input = 'Hello, Playwright!';

console.log('Input:              ', input);
console.log('Regular function:   ', reverseString(input));
console.log('Arrow function:     ', reverseArrow(input));
console.log('Loop:               ', reverseWithLoop(input));
console.log('Recursion:          ', reverseRecursive(input));
