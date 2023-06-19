// Rest Operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

//array
const arr = ['lemon','guava','mango','watermelon','jackfruit'];
const [first,...restofFruit] = arr;
console.log(first,restofFruit);

const findFruit = restofFruit.find((item)=>item==='watermelon');
console.log(findFruit);

//object
const obj = {
    name: "John",
    job : "developer",
    age: 19,
    sex: "male",
}

const {name,...restOfobj} = obj;
console.log(name,restOfobj);

//functions
const func = (name,...scores)=>{
    console.log(name);
    console.log(scores);
    
    const average = scores.reduce((total,item)=>{
        return total += item;
    },0)/scores.length;
    
    console.log(average);
}

// func(obj.name,87,91,56,71);

const test = [90,100,10,50];
//spread operator
func(obj.name,...test);