// // FUNCTION DECLARATION
function walk (){
    console.log('walk');
}
 walk();

 //FUNCTION EXPRESSION 
 const run = function walk(){
    console.log("run");
 }
run();

// HOISTING:

// walk();
// function walk(){
//     console.log('walk');
//}
//we can call the function using a function declaration syntax before it is defined.

// run()
// const run = function walk(){
//     console.log("run");
//}
// but we cannot do this using a function expression syntax.
// if we call the run beforeit is initialised we get a reference error that run is not defined
// like using a const or a variable before it is defined.




