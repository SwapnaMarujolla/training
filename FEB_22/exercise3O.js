
let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address1;// here address1 and address3 

console.log(areEqual(address1, address2));
console.log(areSame (address1, address2));
console.log(areSame(address1, address3));

// Constructor Function
function Address (street, city, zipCode) {
this.street = street;
this.city = city;
this.zipCode = zipCode;
}

function areEqual(address1, address2) {
return address1.street === address2.street &&
address1.city === address2.city &&
address1.zipCode === address2.zipCode;
}

function areSame(address1, address2){
    return address1 === address2;
}


// here ojects 1 and 2 are equal and their individual properties are equal 
// but they are not the same objects i.e 2 different objects in memory
// address1 and address3   because they are pointing to the same objects in the memory