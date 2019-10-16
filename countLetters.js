const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let result = {};
  let letters = str.split(" ").join("");
  for (let i of letters) {
    let count = 0;
    let char = i;
    for (let j of letters) {
      if (char === j) {
        count++;
      }
    }
    result[char] = count;
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));