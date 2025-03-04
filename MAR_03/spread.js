const num = [0,0,0,0]
const even = [2,4,6,8]
const odd = [1,3,5,9]
const newNumber = [...num,...odd,...even];
console.log(newNumber);