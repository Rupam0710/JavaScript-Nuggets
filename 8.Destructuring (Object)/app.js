//Faster and efficient way of accessing the obejct - Object Destructuring 
const obj = {
    first : "rupam",
    second : "pal",
    city : "kolkata",
    siblings : {
        sister : "mampu",
    },
};


// const first = obj.first;
// const second = obj.second;
// const city = obj.city;
// const sister = obj.siblings.sister;


// console.log(first,second,city,sister);


// const {first,second,city,siblings:{sister}} = obj;
// console.log(first,second,city,sister);

//The order of the object variables doesn't matter
const {first:ist,second,city,siblings:{sister:sis}} = obj;
console.log(ist,second,city,sis);

//Function to access the object
// function person(item){
//     console.log(item.first);
// }

// function person(item){
//     const {first,second,siblings:{sister:sis}} = item;
//     console.log(first,second,sis);
// }
function person({first,second,siblings:{sister:sis}}){
    
    console.log(first,second,sis);
}

person(obj);