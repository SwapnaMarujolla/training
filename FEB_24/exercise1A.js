// const numbers = arrayFromRange(1, 6);
// console.log(numbers);

// function arrayFromRange(min, max){
//     const output = [];
//     for(let i=min;i<=max;i++){
//         output.push(i);
//     }
//         return output;
// }

// function calculateArea(shapeName,value1,value2){
//     let value1 = 2,
//         value2 = 2,
//     get area() {
//         return Math.PI * this.value1 * this.value2;

//     }
// };
// console.log(calculateArea.area)

// function circleArea(radius) {
//   return Math.PI * radius * radius;
// }
// // console.log(cirlceArea)
// //  const area = circleArea(5);
// //  console.log(area);
// //  console.log(circleArea(10));

// function rectangleArea(length, breadth) {
//   return length * breadth;
// }
//  console.log(rectangleArea(10,20));

// function squareArea(Side) {
//   return Side * Side;
// }
//  console.log(squareArea(20));

// function calculateArea(shapeName, value1, value2) {
//   let area;
//   if (shapeName === "square") {
//     area = squareArea(value1);
//   } else if (shapeName === "circle") {
//     area = circleArea(value1);
//   } else if (shapeName === "rectangle") {
//     area = rectangleArea(value1, value2);
//   }
//   console.log(area);
// }
// calculateArea("squares", 2);
// calculateArea("circle", 2);
// calculateArea("rectangle", 2, 4);


// switch (circle){
//   case 'radius':
//   console.log('radius');
//   break;

//   case 'shapeName':
//   console.log('shapeName');
//   break;

//   default:console.log('undefined');
// }
// function calculateArea(shapeName, value1, value2) {
  
//     let area 
//     switch(shapeName){
//     case "square":
//        area = squareArea(value1);
//       break;
//     case "circle":
//        area = circleArea(value1);
//       break;
//     case "rectangle":
//        area = rectangleArea(value1, value2);
//       break;
//     default : area = 1,2,3;
//     }
//     console.log(area);
// }
// calculateArea('rectangles',2,4);

function shape(square){
  // let newString = 'typeOf'+typeof(square)
  let circle = {
    radius : 5,



  } 
  let color = `datatype of ${JSON.stringify(circle)} ${typeof(circle)} `; 

  console.log(color);
}
shape(2);
typeof 'string'




// const value = countOccurances(nums,2)
// console.log(count);

// function countOccurances(array,element){
  //   let count = 0;
  //   for (let element of array){
    //     if (element === array){
      //       count++;
      //       return count;
      //     }
      //   }
      
      // }
      
      // 
// const nums = [1,2,3,4,5,2,4,1,3,2,42,4,6,78,35,75,2,3,2,2,3,4,65,976,2,43,24,5,6,1,2];
// const value = 2;
// let count = 0;
// for(let i=0;i<nums.length;i++){
//   if(nums[i] === 2){
//     count++;
//   }
// }
// console.log(count);
