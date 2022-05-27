
const fizzbuzzUntil = (number) => {

  let a = 0

  while (a <= number) {
    if (a % 5 === 0 && a % 3 === 0) {
      console.log('FizzBuzz');
    } else if (a % 5 === 0) {
      console.log('Buzz');
    } else if (a % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(a);
    }
  a += 1;
  }
}

module.exports = fizzbuzzUntil;

