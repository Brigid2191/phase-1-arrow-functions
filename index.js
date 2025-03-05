// Function Declaration
function multiply(a, b) {
    return a * b;
  }
  
  // Function Expression
  const divide = function(a, b) {
    return a / b;
  };
  
  // Arrow Function (with implicit return)
  const add = (a, b) => a + b;
  
  // Arrow Function (with explicit return)
  const subtract = (a, b) => {
    return a - b;
  };
  
  // Arrow Function with a single parameter (parentheses are optional)
  const square = x => x * x;
  
  // Using an arrow function with the .map() method
  const numbers = [1, 2, 3, 4, 5];
  const squares = numbers.map(num => num * num);
  
  console.log(squares); // Output: [1, 4, 9, 16, 25]
  