const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};

console.log(person.hobbies[1]);

const cohort = {
  name: 'May2022',
  id: 1234,
  student: ['Russell', 'Timbo', 'Sam']
}

const summary = (method) => {
  return `${method.id} - ${method.name} - ${method.student.length} students in this cohort`;
}

summary(cohort)