const addToBatch = (arr, num) => {
  if (arr.length >= 5) {
    return arr;
  }

  return arr.concat(num);
}

addToBatch([1], 3);

addToBatch([1,2,3,4], 5);

addToBatch([1,2,3,4,6], 5);