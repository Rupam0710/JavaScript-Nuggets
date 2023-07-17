//set object - stores a collection of unique values of any type


//new Set()
const unique = new Set();

//add(value) - it adds a value in set
const random = 4;

unique.add('first');
unique.add('first');
unique.add('second');
unique.add('first');
unique.add('third');
unique.add(random);

//clear() - it clears all the items from the set

//has(value) - it returns true if value exist in set
const hasi = unique.has('first');
console.log(hasi);

//delete(value) - it deletes  value from the set
unique.delete('first');
console.log(unique);

//example using set 
const products = [
    {
        title : 'high-back bench',
        company : 'ikea',
    },
    {
        title : 'albany table ',
        company : 'marcos',
    },
    {
        title : 'accent chair',
        company : 'caressa',
    },
    {
        title : 'wooden table',
        company : 'ikea',
    }
]

//mapping over all the array objects
const company = products.map((item)=>item.company);
console.log(company);

//only storing unique names using set
const uniqueset = new Set(company);
console.log(uniqueset);

//converting set into array using spread method and adding all
const arr = ['all',...uniqueset];
console.log(arr);

//doing the above three  functions in a single line
const singleLine = ['all',...new Set(products.map((item)=>item.company))];
console.log(singleLine);