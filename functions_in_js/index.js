// Types of functions in JavaScript
// ----------------------------------------------------------------

// (1) Function declaration or function statement

function foo() {
  console.log("hello from foo");
}
foo();

// ---> function declaration or statement can be hoisted

// ------------------------------------------------------------------------

// (2) Function expression

var foo1 = function () {
  console.log("hello from foo1");
};
foo1();
// ---> function expressions cannot be hoisted

// -----------------------------------------------------------------
// (3) Anonymous function
//  function (){
//     console.log("anonymous")
//  }
// ---> above code through an error

// --> anonymous function are written without a name.
// --> anonymous funtions are used when function returning a function.
// --> for example:

function foo2() {
  // below func is anonymous func
  return function () {
    console.log("hello from anonymous func");
  };
}

// foo2()();
// or
let anonymousFunc = foo2();
anonymousFunc();

// ----------------------------------------------------------------
// (4) Named function expression

const foo3 = function a() {
  console.log("hello from named func expression");
};
foo3();

// a(); // throughs error "a is not defined"

// -----------------------------------------------------------------

// (5) First class functions or first class citizens

// ---> First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

// ------------------------------------------------------------------
// Arrow functions

// -----------------------------------------------------------------
// Parameters vs Arguments

function foo4(text) {
  // this passing is parameter
  console.log(`${text} from foo4 `);
}
foo4("hello"); // This passing is argument

// ---> Arguments are always comes from the function call.
// ---> Parameter which is kind of label or identifier which gets the value as param from argument.
