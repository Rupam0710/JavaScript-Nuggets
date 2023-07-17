//array includes() - checks if the item is in an array
//useful in the conditional statements

const groceries = ['milk','bread','meat'];

let randomItem = 'lemon';

//it returns true or false depending upon random item
const isIncluded = groceries.includes(randomItem);
console.log(isIncluded);

//it returns true or false depending upon the item and position
let item = 'milk';
const isIncluded_pos = groceries.includes(item,0);
console.log(isIncluded_pos);

//condition statement
if(groceries.includes(randomItem))console.log(`Yeah its on the list`);
else console.log(`No it is not in the list`);