// there will be no candies left over if we can mod #of candy by #of people
const divide_candy = (numberOfCandies) => {
  const result = [];
  for (let i = 1; i <= numberOfCandies; i++) {
    if (numberOfCandies % i === 0) result.push(i - 1);
  }
  return result;
};

//test cases
// console.log(divide_candy(30));
// console.log(divide_candy(25));
