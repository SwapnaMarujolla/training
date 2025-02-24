const numbers = [3,4];

// Adding numbers at the end
numbers.push(5, 6);

// pushes elements to the right Adding numbers in the begining.
numbers.unshift(7, 8);

// by adding a splicing method we can add or remove elements at any position.
numbers.splice(2,0,'a','b');

console.log(numbers);

