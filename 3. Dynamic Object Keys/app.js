// dot notation
const person ={
    name:'john',
};

console.log(person.name);
person.age = 25;
console.log(person);

//square bracket notation

const items = {
    'featured-item':['item1','item2'],
};

console.log(items['featured-item']);
console.log(person['name']);

let appstate = 'loading';
appstate = 'error';

const keyname = 'apple';

const app={
    [appstate]:'true',
};

app[keyname] = 'i-phone';

console.log(app);

//updating state variable dynamically

const state = {
    loading: true,
    name : '',
    job : '',
};

function update(key,value){
    state[key]= value
}

update('name','Rupam');
update('job','developer');

update('products','vs-code');

console.log(state);


