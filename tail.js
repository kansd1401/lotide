const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return;
};

const tail = function(arr) {
  const newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr[i - 1] = arr[i];
  }
  return newArr;
  
};

const words = [];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 0);