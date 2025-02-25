function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
     };
     console.log(this);
 }
  Circle.call({shape:'circle'},4)
 const another = new Circle(1);
 
Circle()


   
    