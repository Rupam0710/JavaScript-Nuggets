//string includes() - checks if a string contains another string

const products = [
    {
        title : 'high-back bench',
        company : 'ikea',
    },
    {
        title : 'albany table ',
        company : 'marcos',
    },
    {
        title : 'accent chair',
        company : 'caressa',
    },
    {
        title : 'wooden table',
        company : 'ikea',
    }
]

const text = 'a';

// it checks whether the above text is in the products
const filterproduct = products.filter((item)=>item.title.toLowerCase().includes(text));
console.log(filterproduct);

const firstName = 'john';
//it returns true if string contains another string that written in includes()
const res = firstName.includes('jo');
console.log(res);

//1 is the postion 
const res_pos = firstName.includes('j', 1);
console.log(res_pos);

const product = {
    title : 'Leather',
}

//it depends on proper casing
const ans = product.title.includes('L');
console.log(ans);

