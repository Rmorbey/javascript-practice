class ShoppingBasket {

  constructor() {
    this.sum = 0;
    this.basket = [];
    this.discount = 0;
  }

  getTotalPrice() {
    this.basket.map((item) => (this.sum += item.price));
    return this.sum - this.discount;
  }

  addItem(item) {
    this.basket.push(item);
  }

  applyDiscount(discount) {
    this.discount = discount;
  }


}

module.exports = ShoppingBasket;