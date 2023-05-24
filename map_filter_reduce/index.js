/**
 * Front End Interview Questions: map() vs filter() vs reduce()
 *
 * Q: What do map(), filter() and reduce() do?
 */

const nums = [1, 2, 3, 4, 5];

// map
const numsAddOne = nums.map((value) => value + 1);
console.log(numsAddOne);

// filter
const evenNums = nums.filter((value) => value % 2 === 0);
console.log(evenNums);
console.log(nums);

//reduce
const sum = nums.reduce((total, current) => {
  return total + current;
}, 0);

console.log(sum);

const numsAddOneEvens = nums.reduce((acc, current) => {
  current = current + 1;

  if (current % 2 === 0) {
    acc.push(current);
  }

  return acc;
}, []);

console.log(numsAddOneEvens);
