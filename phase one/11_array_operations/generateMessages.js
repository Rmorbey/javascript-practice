const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const generateMessages = (arr) => {
  return arr.map((name) => {
    return `Hi ` + name + `! 50% off our best candies for you today!`;
  });
}

generateMessages(names);

const newNames = ['Riff', 'Ruff', 'Roff', 'Raff', 'Reff'];

const newGenerateMessages = (arr) => {
  return arr.map((name) => {
    return `Hi ${name}! 50% off our best candies for you today!`;
  });
}

newNewGenerateMessages(namesAndDiscounts);

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const newNewGenerateMessages = (arr) => {
  return arr.map(({name, discount}) => {
    return `Hi ${name}! ${discount}% off our best candies for you today!`;
  });
}

newNewGenerateMessages(namesAndDiscounts);