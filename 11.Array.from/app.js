//Array.from - NOT ON PROTOTYPE

//from - returns Array object from an object
//with a length property or an iterable object
//from - turns array-like/ish into array - string,nodelist,set

const udemy = "udemy";
//returns an array -  string
// console.log(Array.from(udemy));

const text = document.querySelectorAll('.text');
//returns a array nodelist
// console.log(text)

// const newText = Array.from(text);
//Returns an array
// console.log(newText);

//Returns a heading with text conetent
const newText = Array.from(text).find((item)=>item.textContent==='person');
// console.log(newText);

//creates an array of 120 items or indexes
const items = Array.from({length:120},(_,index)=>{
    return index;
})

// console.log(items);

//returns the no of items on a single page
const itemsPerPage = 14;
const pages = Math.ceil(items.length / itemsPerPage);
// console.log(pages);

//creates items for each page on the website
const newItems = Array.from({length:pages},(_,index)=>{
    const start = index * itemsPerPage;
    const tempItem = items.slice(start,start+itemsPerPage);
    return tempItem;
})

console.log(newItems);

