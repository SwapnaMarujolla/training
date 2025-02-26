// const number = [1,2,3,6,4];
// number.sort();
// number.reverse();
// console.log(number);

const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' },
    ];
    courses.sort(function(a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
    });
    