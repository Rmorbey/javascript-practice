const ShoppingBasket = require('./shoppingBasket');


const candyDouble = { name: 'Mars', price: 4.99 };
const sweetDouble = { name: 'Twix', price: 3.99 };

describe('ShoppingBasket', () => {
  describe('.getTotalPrice', () => {
    it(`will return the total price of the basket (STATE?)`, () => {
      let basket = new ShoppingBasket();
      basket.addItem(candyDouble);
      expect(basket.getTotalPrice()).toBe(basket.sum)
    });

    it(`will return the total price of the basket (BEHAVIOUR? HARD-CODED)`, () => {
      let basket = new ShoppingBasket();
      basket.addItem(sweetDouble);
      expect(basket.getTotalPrice()).toBe(3.99)
    });

    it('will return the total price with an empty basket', () => {
      let basket = new ShoppingBasket();
      expect(basket.getTotalPrice()).toEqual(0)
    });

  });

  describe('.addItem', () => {
    it(`will add an item's price to the basket (STATE?)`, () => {
      let basket = new ShoppingBasket();
      basket.addItem(candyDouble);
      expect(basket.basket[0]).toEqual(candyDouble)
    });

    it(`will add an item's price to the basket (BEHAVIOUR? HARD-CODED)`, () => {
      let basket = new ShoppingBasket();
      basket.addItem(sweetDouble);
      expect(basket.basket[0]).toEqual({ name: 'Twix', price: 3.99 })
    });
   
  });

  describe('.applyDiscount', () => {
    it(`will reduce the totalPrice by the discount amount`, () => {
      let basket = new ShoppingBasket();
      basket.addItem(candyDouble);
      basket.applyDiscount(0.99);

      expect(basket.getTotalPrice()).toBe(4);
    });
  });
  
});