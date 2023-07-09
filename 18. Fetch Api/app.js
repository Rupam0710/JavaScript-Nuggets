//  Javascript Nuggets

// Fetch API -  Browser API for HTTP (AJAX) Requests
// Default - GET Requests, supports other methods as well
// Returns Promise

const url = 'https://www.course-api.com/react-tours-project'

// console.log(fetch(url));

//using fetch with .then() and .catch()
// fetch(url).then((resp)=>resp.json()).then((data)=>console.log(data)).catch((err)=>console.log(err))

//using async and await
const obj = async()=>{
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        // return data;
        
    } catch (error) {
        console.log(error);
    }

}

obj();
//for return data
// console.log(obj().then());