//delay logic
//so it runs after last click
//setTimeout returns id,which pass into cleartimeout

const btn = document.querySelector('.btn');

const debounce = () =>{
    let timeoutID;
    return ()=>{
        console.log(timeoutID);
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            console.log('you click me');
        }, 2000);
    }
}

btn.addEventListener('click',debounce());