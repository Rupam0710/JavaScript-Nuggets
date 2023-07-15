//Javascript Nuggets
//ECMAScript 2022
//at() - takes an integer and returns the item at that index - string , array

//using top level await from external module
import fetchTabs from "./fetchTable.js";
const tabs = await fetchTabs;
console.log(tabs);

const arr = [90, 91, 92];
const oldLast = arr[2];
console.log(oldLast);

//Returns the second last item
const newLast = arr.at(-2);
console.log(newLast);

//on string
const channel = "Rupam Pal";
console.log(channel.at(1));

//Top level await - basic example - we dont have to wrap any code in async function to run await
//You can only run this if you set it as module i.e. type= "module" in index.html at <script src="./app.js" type="module"></script>

//Running fetch using fetch.then()
fetch("https://www.course-api.com/react-tabs-project")
  .then((resp) => resp.json())
  .then((data) => console.log(data));

//Using async await function
const obj = async () => {
  const resp = await fetch("https://www.course-api.com/react-tabs-project");
  const data = await resp.json();
  console.log(data);
};

obj();

//using top level await
const resp = await fetch("https://www.course-api.com/react-tabs-project");
const data = await resp.json();
console.log(data);
