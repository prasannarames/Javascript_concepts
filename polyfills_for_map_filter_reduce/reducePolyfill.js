// polyfill for reduce()

// arr.reduce((acc, cur, i ,arr)=>{}, initialValue)

Array.prototype.myReduce = function (callback, initialValue) {
  var accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callback(accumulator, this[i], i, this)
      : this[i];
  }
};

const nums = [1, 2, 3, 4, 5];

const sum = nums.myReduce((acc, cur, i, arr) => {
  return acc + cur;
}, 0);

console.log(sum);
