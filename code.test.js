const fs = require("fs");
const assert = require("assert");

eval(fs.readFileSync('code.js').toString());

let result1 = tfib(3);
let expected1 = 2;
assert(result1 === expected1, "test 1 failed");

let result2 = tfib(5);
let expected2 = 5;
assert(result2 === expected2, "test 2 failed");

let result3 = tfib(8);
let expected3 = 21;
assert(result3 === expected3, "test 3 failed");

let result4 = tfib(12);
let expected4 = 144;
assert(result4 === expected4, "test 4 failed");

console.log("all tests passed!");
