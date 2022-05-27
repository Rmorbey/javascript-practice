const User = require('./user');
const UserBase = require('./userBase');

const userBase = new UserBase(users);

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];
  
userBase.count();