// Javascript Nuggets - Promises

// async await
// consume/use promises

// Pending, Rejected, FulFilled

//A promise is a javascript object that returns a value that can be used in the future
// const promise = new Promise((resolve, reject) => {
// //   resolve("hello world");
//   reject('there was an error');
// });

// the method to access resolve is .then

// promise.then((data) => console.log(data));

// // the method to access reject is .catch
// promise.then((data) => console.log(data)).catch((err)=> console.log(err));

const value = 2;
const promise = new Promise((resolve,reject)=>{
    //It gives me no from 0->3 
    const random = Math.floor(Math.random()*3);
    console.log(random);
    if(random===value)resolve('you guessed correctly');
    else reject('you guessed it wrong');
})

console.log(promise);

