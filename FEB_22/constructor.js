// function Circle(radius){


function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
       
    };
}

const circle = new Circle(1); 
circle.draw(); 

// this is a keyword reference for an object ececuting this piece of code
// to initialise an object than returning them
// with a dot notation we can read an object 
// this creates a new empty object
// then it will set this to the new empty Object
// finally this new operator will return to this usinh this fuction 