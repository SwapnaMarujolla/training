const alphabets = ['a','b','c','d','e','f','g','h']
const vowels = alphabets.filter(function(value){
    return value === 'a'||value === 'e'||value === 'i'||value === 'o'||value === 'u';
});
console.log(vowels);
console.log(alphabets);

const number = [1,2,3,4,5,6,7,8,9,10]
const even = number.filter(function(value){
    return value % 2 === 0;
});
console.log(even);
