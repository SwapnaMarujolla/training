// const colors = ['orange','black','red','pink']
//  colors.pop()
// console.log(colors);
// // pop removes whatever element is present in the last

// const fruits = ['apple','mango','grapes','tomato','pineapple']
// fruits.shift()
// console.log(fruits);
// // this removes the elements from the begining

// //splice method
// const fruits2 = ['apple','mango','grapes','tomato','pineapple']
// fruits.splice(0,1);
// console.log(fruits);

const numbers = []
const array = numbers.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;

});
console.log(array);



