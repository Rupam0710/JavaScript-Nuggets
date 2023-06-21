// Spread Operator...
// Allows and iterable to spread/expand individually inside reciever
// Split into single items and COPY them

//Spliting a word into letters using spread operator
const word = 'Bangalore';
const letter = [...word];
console.log(letter);

//coping all the array items into a single array item
const name  = ['ronaldo','isco','bale','benzema'];
const name2 = ['ramos','iker','james','kroos','modric'];

//Returns a nested array
// const res = [name,name2];
// console.log(res);

//Returns a single array
const res = [...name,...name2];
console.log(res);

//Reference
const newFriends = [...res];
newFriends[2] = 'vinicious';
console.log(res);
console.log(newFriends);

//objects
const obj = {name:'john',job:'developer'};
const ans = {...obj,age:16,name:'Rupam'};
console.log(obj);
console.log(ans);