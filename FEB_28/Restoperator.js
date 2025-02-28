// REST OPERATOR
// function sum(...args){
//     console.log(args);
// };
// sum(1,2,3,4,5,10);
//when we use this with the parameter of a function we refer to this as a rest oprator.
// if we remove the rest operator and just give args we will be able to pass only one argument
// and it will return 1 as its result.
// it takes all the arguments and put them in an array.

// function sum(...args){
//     return args.reduce((a,b) => a+b);// args is an array containing all elements and reduce iterates through the array andaccumulates the result
// }
// console.log(sum(1,2,3,4,5,10));

//EXAMPLE TO FIND THE DISCOUNT OF PRICES
function sum(discount,...prices){
    const total = prices.reduce((a,b)=>a+b);
    return total*(1-discount);
}
console.log(sum(0.1,20,30));
//in any function we have to use rest parameter at the last so it is call a rest operator