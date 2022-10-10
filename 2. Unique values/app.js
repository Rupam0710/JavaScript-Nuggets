//Unique Values
const menu =[
    {
        name: 'Pancakes',
        category: 'Break fast',
    },
    {
        name: 'Burger',
        category: 'Dinner',
    },
    {
        name: 'Steak',
        category: 'Lunch',
    },
    {
        name: 'Pizza',
        category: 'Dinner',
    },
    {
        name: 'Indian Thali',
        category: 'Lunch',
    },
    {
        name: 'Puri Saabji',
        category: 'Break fast',
    },
];

const categories = ['all',...new Set(menu.map((item)=> item.category))];
console.log(categories);

//map - get all instances
//new Set - get unique characters
//['all',...]- turn it back to array

const result = document.querySelector('.result');
result.innerHTML = categories.map((category)=>{
return `<button>${category}</button>`;
}).join('');
