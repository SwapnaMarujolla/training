//  FINDING ELEMENTS IN REFERENCE TYPES


 const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
  ];
  
  const course = courses.find(function(course) {
    return course.name === 'xys';
  });
  
  console.log(course); 