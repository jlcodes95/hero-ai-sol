const train_sort = (n, trains) => {
  let count = n;
  let result = [];
  while (count > 0 && trains.length > 0) {
    const cars = trains.splice(0, 1);
    if (result.length === 0 || result[result.length - 1] > cars[0]) {
      result.push(cars[0]);
      count--;
    } else if (result[0] < cars[0]) {
      result = cars.concat(result);
      count--;
    }
  }
  return result;
};

//test cases
// console.log(train_sort(3, [1, 2, 3]));
// console.log(train_sort(5, [10, 2, 12, 20, 3]));
