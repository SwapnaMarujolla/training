// an object is a key value pair
//the purpose of these ibjects is to group related values
// often functions operates on these variables

const circle = {
    radius : 1,
    location:{
        x : 1,
        y : 1,
    },
     isVisible : true,
    draw : function(){ // if a function is part of an object we call it as method
        console.log('draw');
    }
}
circle.draw();