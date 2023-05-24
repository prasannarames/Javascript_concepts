/**
 * Front End Interview Questions: Spread & Rest Operators
 *
 * Q: What do the spread and rest operators do?
 */

const users = ["Dylan", "Per", "Dollan"];
const allUsers = ["Olivia", ...users];
console.log(allUsers);

const user = {
  firstName: "Dylan",
  lastName: "Israel",
  channel: "codingtutorials360"
};
const defaults = { channel: "scrimba", ...user };
console.log(defaults);

const { channel, ...remainder } = defaults;

console.log(remainder);

function addNums(...nums) {
  return nums.reduce((total, current) => {
    return total + current;
  }, 0);
}

console.log(addNums(1, 2, 3));
console.log(addNums(1, 2));
