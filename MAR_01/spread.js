const person = {
    name : 'Poojitha',
    age : 21,
    school : 'Bapuji',
    adress : {
        state : 'Karnataka',
        district : 'Davangere',
    }
}
person.name = 'John';
person.adress.district = 'Bangalore';
// console.log(person.adress.district);

const person2 = {
    name:'akash',
   ...person,
   age:23,
   certificate:'NCC'
//    adress : {
//     ...person.adress,
//    }
}
// person2.name = 'Anjali';
// person2.adress.district = 'Mysore';  
// console.log(person);
// console.log(person2)
// const person2 = person;
const even = [2,4,6,8,10,12]
const numbers = [[[1],2,3],[4,[5,[6]]]]
const odd = [1,3,5,7,9,11];
const allNumber = [...even, ...odd];
console.log(numbers[0][2]);
