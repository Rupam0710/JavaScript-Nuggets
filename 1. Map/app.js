//Map Method

const people = [
    {
        name:'Rupam',
        age: 19,
        position:'Developer',
    },
    {
        name:'Raj',
        age: 29,
        position:'app devolper', 
    },
    {
        name:'Messi',
        age: 39,
        position:'Network Adminstrator',
    }
];

// Quokka.js - Extension
// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one

//for a single variable in an object using arrow function
const ages = people.map((person)=> person.age);
console.log(ages);

//for more than one variable in an object using arrow function
const newPeople = people.map((item)=>{
    return {
    firstName: item.name.toUpperCase(),
    position: item.position,

    };
});

console.log(newPeople);

const names = people.map((person)=> `<h2>${person.name}</h2>`);
const result = document.querySelector(`#result`);

result.innerHTML=names.join('');

