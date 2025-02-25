// Emptying an arry
// simply we can create a new empty array

let numbers = [1,2,3,4,5]
let another = numbers

// Solution 1
numbers=[]// This is pointing to the new object in the memory
console.log(another);

// Solution 2
numbers.length = 0;
console.log(another);
console.log(numbers);

// Solution 3
numbers.splice(0, numbers.length);
console.log(another);
console.log(numbers);


// Solution 4
while(numbers.length>0)
    numbers.pop()
console.log(another);
console.log(numbers);
