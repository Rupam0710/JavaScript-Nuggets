// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance (object), returns first match, if no match - undefined

const people = [
    { name: 'bob', age: 20, position: 'developer' },
    { name: 'peter', age: 25, position: 'designer' },
    { name: 'susy', age: 30, position: 'the boss' },
    { name: 'anna', age: 35, position: 'intern' },
  ];

//filter
const youngPeople = people.filter((person)=>{
    // if(person.age<30){
    //     return person;
    // }
    return person.age<30;

});
console.log(youngPeople);

const developers = people.filter((person)=> person.position === 'developer');
console.log(developers);

//no match - empty array
const seniorDEV = people.filter((person)=>person.position==='senior dev');
console.log(seniorDEV);

//find
const Peter = people.find((person)=> person.name === 'peter');
console.log(Peter);

//for strings
const fruits = ['orange','lemon','pearl'];
const fruit = fruits.find((item)=>item==='lemon');
console.log(fruit);

//no match - undefined
const oldPerson = people.find((person)=> person.age>35);
console.log(oldPerson);

//multiple matches - first match
const RandomMatch = people.find((person)=> person.age<35);
console.log(RandomMatch);

//similarities of filter and find
const anna = people.filter((person)=> person.name === 'anna');
console.log(anna[0].position);