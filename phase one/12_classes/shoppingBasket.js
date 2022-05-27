class ShoppingBasket {

  constructor() {
    this.sum = 0
  }

  getTotalPrice() {
    return this.sum;
  }

  addItem(item) {
    this.sum += item.getPrice();
  }
  
}

module.exports = ShoppingBasket;

// const ShoppingBasket = require('./shoppingBasket');