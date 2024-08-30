// 1)

// const people =['silver', 'chandu', 'krishna', 'sankar'];

// console.log(people);

// 2) single exports

// const people =['silver', 'chandu', 'krishna', 'sankar'];
// console.log(people);
// module.exports ='siva';
//

// 3) multilpe exports
const people =['silver', 'chandu', 'hari', 'sankar'];
const ages=[10,20,15,26]
// console.log(people);

module.exports ={
    people:people,
    ages:ages
};
