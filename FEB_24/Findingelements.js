let numbers = [1,2,3,1,4];
numbers = []
console.log(numbers.indexOf('1'));//if the element is not in an array then it returns -1

console.log(numbers.lastIndexOf(1));// it finds the number or element from last in an array returning the index position o an array

console.log(numbers.includes(1));// checks whether the element is present in a given array

const newNumbers = []


//  for(let key in number)

//     if (i!==5){ 
//         console.log(i,numbers);
//         i++;  
//     };

//      console.log(key,numbers[key])
    
    
//     console.log(numbers[3]);


// const allBalls= ['a','b','c','e','i','o','m','u','z'];
// const redBalls = [];

// for(let i=0;i<allBalls.length;i++){
//      if(allBalls[i] === 'a'||allBalls[i] ==='e'||allBalls[i] ==='i'||allBalls[i] ==='o'||allBalls[i] ==='u'){
//     // console.log(allBalls[i]);
//    redBalls.push(allBalls[i]);
// }
// }
// console.log(redBalls);


// for (let i=0;i<alphabets.length;i++){
//     // for (let j=0;j<vowels.length;j++){
//         if(alphabets[i] === vowels[j]){
//             console.log(alphabets[i]);
//         }
    
//     }
// // };

for (let i in allBalls){

    if( allBalls[i] === 'a'||allBalls[i] ==='e'||allBalls[i] ==='i'||allBalls[i] ==='o'||allBalls[i] ==='u'){
    // console.log(i,allBalls[i]);
    redBalls.push(allBalls[i]);

   }
}
console.log(redBalls);
// for(const elements of alphabets){
//     console.log(elements);
// }
// for(let)