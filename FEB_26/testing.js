// this is to test every elements
const numbers = [1,2,3]
const allPositive = numbers.every(function(value){
    return value >= 0;   
});
console.log(allPositive);


// This is to test only some elments
const number = [-4,-1,-2,-3];
const atleastOnePositive = number.some(function(value) {
    return value >= 0;
});
console.log(atleastOnePositive);