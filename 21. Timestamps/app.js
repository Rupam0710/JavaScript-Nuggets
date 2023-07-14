//Javascript Nuggets
//Timestamps

console.log(new Date());

//Unix Time
//January 1,1970
//1s = 1000ms

//Date.now() - It returns date in miliseconds
console.log(Date.now());

//new Date().getTime() - It returns the time in ms from 1 jan 1970
console.log(new Date().getTime());

//new Date().valueOf() - It returns the time in ms from 1 jan 1970
console.log(new Date().valueOf());

setTimeout(() => {
    console.log(Date.now());
}, 1000);

//create id's in learning apps
let people = []
people = [...people , {id:Date.now(),name:'Rupam'}];

setTimeout(() => {
    people = [...people , {id:Date.now(),name:'John'}];
    console.log(people);
}, 1000);


//create/get dates
console.log(new Date(1689355582982));
const now = Date.now();
const futuredate = (now + 60*1000);

console.log(new Date());
console.log(futuredate);

//difference between dates
const firstdate = new Date();
const seconddate = new Date(2023,6,15);

const first = firstdate.getTime();
const second = seconddate.getTime();

console.log(first);
console.log(second);

//timediff
const timediff = second - first;
console.log(timediff);

//timediff in min
const min = timediff/(1000*60);
console.log(min);

//timediff in hours
const hours = timediff/(1000*60*60);
console.log(hours);
