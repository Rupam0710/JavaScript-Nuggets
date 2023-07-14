//Optional Chaining

const people = [
  {
    name: "rupam",
    location: {
      street: "137/2 , Purba Sinthee Road ",
      timezone: { offset: "+05:30" },
    },
  },
  {
    name: "bob",
    location: { street: "Christ Church , Wellington" },
  },
  {
    name: "Veda",
    location: { street: "Marine Drive", timezone: { offset: "+06:30" } },
  },
];

// people.forEach((person)=>{
//     console.log(person.name);
// })

//To display the offset timing of each object
people.forEach((person) => {
  console.log(
    person.location &&
      person.location.timezone &&
      person.location.timezone.offset
  );
});

//To display the offset timing of each object and mark offset that is undefined with any default value
people.forEach((person) => {
  console.log(
    (person.location &&
      person.location.timezone &&
      person.location.timezone.offset) ||
      "The offset is not defined"
  );
});

//To display the offset timing of each object using optional chaining
people.forEach((person) => {
  console.log(person?.location?.timezone?.offset);
});
