//reduce objects
// cart example
const cart  = [
    {
        title : "samsung galaxy 7",
        price : 12000.99,
        amount : 1
    },
    {
        title : "i phone 11",
        price : 50000.99,
        amount : 3
    },
    {
        title : "redmi note 9 ",
        price : 15000.99,
        amount : 4
    },
    {
        title : "one plus 8",
        price : 30000.99,
        amount : 2
    },
]


let {totalItems,cartTotal} = cart.reduce((total,cartItem)=>{
    const {amount,price} = cartItem;
    
    //count items
    total.totalItems += amount
    
    //count sum
    total.cartTotal += amount *price;
    return total 
    
},{
    totalItems:0,
    cartTotal : 0
})
cartTotal = parseFloat(cartTotal.toFixed(2))
//console log total
console.log(totalItems,cartTotal);

// github repos example

const url = 'https://api.github.com/users/john-smilga/repos?per_page=100'

const fetchResponse = async()=>{
    const res = await fetch(url);
    const data = await res.json();
    const newData = data.reduce((total,repo)=>{
        const {language} = repo;
        // if(language){
        //     if(total[language]){
        //     total[language] = total[language]+1;
        //     }
        //     else total[language]=1;
        // }
        if(language){
            total[language]=total[language]+1 || 1;
        }
        return total;
    },{})
    console.log(newData)
}

fetchResponse()