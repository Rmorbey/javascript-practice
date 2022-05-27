Hello

// const person = {
//   name: 'Maxine',
//   age: 32,
//   address: 'London, E1 123'
// };

// // both ways can be used to access an object's property:
// console.log(person.name);
// console.log(person['name']);

// const bankAccount = {
//   // simple value attributes
//   accountNumber: 376782676,
//   accountSortCode: 999999,

//   // we can attach functions too (so they act like 'methods'):
//   getBalance: () => {
//     return 100;
//   }
// };

// bankAccount.getBalance();

const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};

// console.log(person.name); <<<
// console.log(person['name']);

console.log(person['address']['city'])
console.log(person.address.city)

console.log(person['hobbies'][1])
console.log(person.hobbies[1])

const cohort = {
  name: 'April2022',
  id: 1234,
  student_names: [`Rock'n Russ`, `Lovely Laura`, `Sickly Stevie`]
};

const callOut = (method) => {
  console.log(`${method.id} - ${method.name} - ${method.student_names.length} students in this cohort`)
}

callOut(cohort);

const summary = (method) => {
  return `${method.id} - ${method.name} - ${method.student_names.length} students in this cohort`;
}

summary(cohort);