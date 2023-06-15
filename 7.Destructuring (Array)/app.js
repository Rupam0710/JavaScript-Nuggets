//Array Destructuring
//It is a way of packing and unpacking the variables from an array in a faster and an easier way
const fruits = ['lemon','mango','banana'];
const friends = ['rupam', 'rohit','raj','sahil','nilava'];

// const fruit1 = fruits[0];
// const fruit2 = fruits[1];
// const fruit3 = fruits[2];

// console.log(fruit1,fruit2,fruit3);
console.log(fruits[0],fruits[1],fruits[2]);

//to print consecutive names 
const [bob,ana,raj,sahl,nilava,pal] = friends;
console.log(bob,ana,raj,sahl,nilava,pal);

//to print names by ommiting 1 in between
const [name1,,name3,,name5] = friends;
console.log(name1,name3,name5);

//swapping the variables
let first = 'john';
let second = 'bob';

// let temp = a
// a= b
// b= temp

[second,first ] = [first,second]

console.log(first , second);