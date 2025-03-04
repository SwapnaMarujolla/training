const number = [-1,1,2,3,-5];
const positive = number.every(function(values){
    return values > 0;
});
console.log(positive);
// every and some returns a boolean expression

const fruits = ['apple','mango','orange']
const fruit = fruits.slice(1,3)
console.log(fruit);