//function to change the case to upper case
function makeUpper(value){
    console.log(value.toUpperCase());
}
// makeUpper('Rupam');

//function to change the string reverse
function makeReverse(value){
    console.log(value.split('').reverse().join(''));
}


//Calling the function to change the case of the name

//Using callback function to change the case of the name
function caseChange(value,cb){
    const name = `${value} ronaldo`;
    cb(name);
}

caseChange('cristiano',makeUpper);
caseChange('cristiano',makeReverse);

//we can call the function directly using arrow function
caseChange('Raman', (value)=>console.log(value));

//we can call the function directly using normal function
caseChange('Raman', function(value){
    console.log(value);
})


//Using the button in html page
const btn = documenet.querySelector('.btn');
btn.addEventListener('click',function(){
    console.log('The button is clicked')
})