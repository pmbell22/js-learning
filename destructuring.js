// Destructuring - Easily extract array elements or object properties and store them in variables. 
// Declarative is functional programming essentially. 
// Declarative - Coding as a process of constantly defining what things are...? 

[a, b] = ['Hello', 'Kanye'];
console.log(a); //Hello
console.log(b) //Kanye

const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num2);
[num1, ,num2] = numbers;  
console.log(num1, num2);