const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
  it(`with input 'Ma' and 10, should return Mars and Malterers`, () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
  });

  it(`with input 'Ma' and 2, should return only Mars`, () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars']);
  });

  it(`with input 'S' and 10, should return Skitties, Skittles and Starburst`, () => {
    expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
  });

  it(`with input 'S' and 4, should return Skitties and Skittles`, () => {
    expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles']);
  });

  it(`with input 's' and 4, should return Skitties and Skittles`, () => {
    expect(searchCandies('s', 4)).toEqual(['Skitties', 'Skittles']);
  });

  it(`with input 'Ma' and 2, should return only Mars`, () => {
    expect(searchCandies('ma', 2)).toEqual(['Mars']);
  });

});