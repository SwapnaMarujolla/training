let person = {

    name : "Poojitha",
    age : 21,
    height : 128,
    weight : 50,
    adhaarNumber : 12345,
    
}
console.log(person);
// keyword obj_name = {
      
//       property_name  (alphanumeric) : value name (String,number ,function)

// // }
// for( let i=0;i<n;i++){

// }
for (let r in person ){
    console.log(r,person[r]);
}
const colour = {
    colour1 : "red",
    colour2 : "blue",
    colour3 : "orange", 
};
console.log(colour);

for(const each_key in colour){
    console.log(colour[each_key]);

}