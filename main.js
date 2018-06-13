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
console.log(f(20), '= 20 plus 10');

// easily make an increment function
const inc = R.add(1);
console.log(inc(20), '= 20 plus 1');
console.log('---------------------');

/**
 * ----- R DOT UNDERSCORE UNDERSCORE -----
 */

// by passing R.__ we're saying we don't know the first variable
// this version is 20 minus 1
// "we don't know what we're subtract FROM but we'll subtract BY 1"
const dec = R.subtract(R.__, 1);
console.log(dec(20), '= 20 minus 1');

// this version is 1 minus 20
// "we want to subtract FROM 1"
// we should rename this func "subtractFrom1" instead of "decrement"
const dec2 = R.subtract(1);
console.log(dec2(20), '= 1 minus 20');

// same as above
const dec3 = R.subtract(1, R.__);
console.log(dec3(20), '= 20 minus 1');
console.log('---------------------');

/**
 * ----- ADD -----
 */

// simple addition
console.log(R.add(10, 5), '= 10 plus 5');
console.log('---------------------');

/**
 * ----- MAP -----
 * map takes func as an argument, then the array
 *
 * maps a function over all arguments
 */

const timesTwo = x => x * 2;

console.log(R.map(timesTwo, [10, 20, 30, 40]), '= 2 times EACH item in array');
console.log('---------------------');

/**
 * ----- ADDINDEX -----
 * add the index that its at
 * the array positions are [0,1,2,3] and we literally add 0,1,2,3 to values in said position
 */

const arr = [10, 20, 30, 40];
console.log(arr, '= original array');

console.log(R.addIndex(R.map)(R.add, arr), '= R.addIndex');
console.log('---------------------');

/**
 * ----- ADJUST -----
 * run another func through it and declare at what position that will run
 *
 * every value stays the same in the example beloew except position 1 (200)
 * it gets 10 subtracted from it cause it's the only one that got run through the sub-func
 */

// subtract 10 from whatever we pass in
console.log(R.adjust(R.subtract(R.__, 10), 1, [100, 200, 300]), '= 200, position 1, minus 10');
console.log('---------------------');

// console.log();
// console.log('---------------------');
