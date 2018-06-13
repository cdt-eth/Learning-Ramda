const R = require('ramda');

// ________________________________________________________________________
/**
 * ----- CURRYING -----
 * Ramda functions are auto-curried.
 * These are the same
 * g(1, 2, 3)
 * g(1)(2)(3)
 * g(1, 2)(3)
 * g(1)(2, 3)
 */

// Regular
// const f = (x, y, z) => x + y + z;

// Curried
// const g = x => y => z => x + y + z;

// store the function in a variable
const f = R.add(10);
console.log(f(20), '20 plus 10');

// easily make an increment function
const inc = R.add(1);
console.log(inc(20), '20 plus 1');

/**
 * ----- R DOT UNDERSCORE UNDERSCORE -----
 */

// by passing R.__ we're saying we don't know the first variable
// this version is 20 minus 1
// "we don't know what we're subtract FROM but we'll subtract BY 1"
const dec = R.subtract(R.__, 1);
console.log(dec(20), '20 minus 1');

// this version is 1 minus 20
// "we want to subtract FROM 1"
// we should rename this func "subtractFrom1" instead of "decrement"
const dec2 = R.subtract(1);
console.log(dec2(20), '1 minus 20');

// same as above
const dec3 = R.subtract(1, R.__);
console.log(dec3(20), '20 minus 1');

/**
 * ----- ADD -----
 */

// simple addition
console.log(R.add(10, 5), '10 plus 5');
