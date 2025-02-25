const numbers = [1,2,3,4];


// REMOVES NUMBERS FROM THE END
const last = numbers.pop();
console.log(numbers);
console.log(last);

// Removes numbers From Begining
const first = numbers.shift();
console.log(numbers);
console.log(first);

// Removing elements from the middle
numbers.splice(2,1);
console.log(numbers)
