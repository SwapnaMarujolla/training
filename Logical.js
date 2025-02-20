// LOGICAL AND OPERATOR(&&)
//Returns true if both the operands returns true
let highIncome = true;
let goodCreditScore = true ;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);


// LOGICAL OR OPERATOR(||)
//Returns true if one of  the operands returns true
 highIncome = false;
 goodCreditScore = true ;
 eligibleForloan = highIncome || goodCreditScore;

console.log(eligibleForLoan);

//LOGICAL OPERATORS WITH NON BOOLEAN OPERATORS
let userColor = '';// if the value is undefined we will get default color as blue by having an OR 
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);


