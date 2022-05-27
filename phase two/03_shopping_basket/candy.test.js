const Candy = require('./candy');

const candy = new Candy('Mars', 4.99);

describe('Candy', () => {
  describe('.getName', () => {

    it(`return the name of the candy`, () => {
      expect(candy.getName()).toEqual(candy.name)
    });

  })
  
  describe('.getName', () => {
    
    it(`return the price of the candy`, () => {
      expect(candy.getPrice()).toBe(candy.price)
    });
   
  })

});
