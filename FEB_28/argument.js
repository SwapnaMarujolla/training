// ARGUMENTS
// function sum(a,b){
//     return a+b;
// };
//console.log(sum(1,2,3,4,5));// if we give more than two elements it takes only the 1st two elements.
//if we pass only one argument it returns NaN.

function sum(){
    let total = 0;
    for(let value of arguments)
        total += value;
        return total;
    
}
console.log(sum(1,2,3,4,5));