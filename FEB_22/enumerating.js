const circle = {
    radius: 1,
    draw() {
   console.log('draw');
   }
   
}
   for (let key in circle)
   console.log(key, circle [key]);
   
   for (let key of Object.keys(circle))// we use this to print all the properties in an object
   
   console.log(key);
    for (let entry of Object.entries(circle))
   console.log(entry);