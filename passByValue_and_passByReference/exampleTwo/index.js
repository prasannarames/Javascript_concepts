// value
// primitive types are held/assigned by values

// Example for value
let myName = "prasanna";
let yourName = myName;

myName = "Ramesh";
console.log(yourName); // logs-> "prasanna"
console.log(myName); // logs-> "Ramesh"

// --------------------------------------------------------------------------------

// Reference
// Non-primites / objects are held/assigned by reference

// Example for reference
let myAddress = {
  city: "chennai",
  state: "tamilnadu",
  pincode: "600115"
};

let yourAddress = myAddress;

myAddress.pincode = "600041";

console.log(yourAddress.pincode); // logs-> 600041

// refer  here  https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/apA.md#values-vs-references
