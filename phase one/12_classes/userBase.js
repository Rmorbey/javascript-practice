class UserBase {

  constructor(user) {

    this.user = user;
  }

  count() {
    return this.user.length;
  }

  getNames() {
    return this.user.map((user) => user.name);
  }

  getIntroductions() {
    return this.user.map((user) => {
      return `Hi, my name is ${user.name}`;
    });
  }
}

module.exports = UserBase;

// const UserBase = require('./userBase');