// get method
// we use getters to access properties in an object
//we use setters to change them
const person = {
    firstName : 'Poojitha',
    lastName : 'GL',
    get fullName (){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName (value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
      person.fullName = 'John Smith';
    console.log(person.fullName);//we can get the full name as a property.
