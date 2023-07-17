// Three methods to convert objects into arrays

const person = {
    name : 'Rupam',
    age  : 22 ,
    job  : 'software developer' 
}

//Object.keys() - convert property name into arrays
const ans = Object.keys(person);
console.log(ans);


//Object.values() - convert property values into arrays
const values = Object.values(person);
console.log(values);


//Object.entries() - convert both 
const both = Object.entries(person);
console.log(both);

//map method
const newresult = both.map((item)=>{
    const [first,second] = item;
    // console.log(first,second);
    return first;
})

// console.log(newresult);

//for of
for(const [first,second] of both){
    // const [first,second] = item;
    console.log(first,second);
}