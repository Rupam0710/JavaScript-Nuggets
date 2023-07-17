//For in loop - iterates over object parameter
//not advised to use it on arrays, especially if the order is not important
//on arrays use "for of" loop instead


// for in - objects
const person = {
    name : 'Rupam',
    age  : 22 ,
    job  : 'software developer' 
}

for(const items in person){
    console.log(`${items} : ${person[items]} `);
}


//for of - array
const arr  = ['rohit','rupam'];

for(const items of arr){
    console.log(items);
}