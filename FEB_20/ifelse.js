// STARTING AN IF AND ELSE STATEMENTS
// Condition 
// if hour is in between 6am to 12 pm : Good morning
// if hour is in between 12 pm to 6 am : Good evening
// otherewise : Good evening


let hour = 10;

if (hour>=6 && hour<=12){
   console.log("Good morning");
}
else if (hour>=12 && hour<=18){
    console.log("Good afternoon");
}
else
console.log("Good evening");
    
