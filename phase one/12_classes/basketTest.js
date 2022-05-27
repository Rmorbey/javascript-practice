const Candy = require('./candy');
const ShoppingBasket = require('./shoppingBasket');

const candy = new Candy('Mars', 4.99);
const twix = new Candy('Twix', 2.50);

const basket = new ShoppingBasket();

basket.addItem(candy);
basket.addItem(twix);
basket.getTotalPrice();