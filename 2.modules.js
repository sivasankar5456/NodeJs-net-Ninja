
// 1)
// const xyz =require('./2.people');

// console.log('xyz'+xyz);
// //console.log(people);// can't access peoples from other obejct like this

// // 2) single import
// const xyz =require('./2.people');

// console.log(xyz);

// 3) multiple imports
// const xyz =require('./2.people');

// // console.log(xyz); 
// console.log(xyz.people);

// const {people,ages} = xyz;

// console.log(ages)

/* 1. xyz holds all imports as sinlge object.
2.To access single object we can use xyz.object name
or 
use destructuring to access single objects directly

*/

// const os=require('os');
// console.log(os.platform(),os.homedir())

