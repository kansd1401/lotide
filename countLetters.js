const assertArrayEqual = function(actual, expected) {
  if (eqArrays(Object.keys(actual),Object.keys(expected))) {
    console.log(`✅✅✅ The 2 arrays are equal: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 The 2 arrays are not equal: ${actual} !== ${expected}`);
  }
  return;
};

const eqArrays = function(arr1, arr2){
  if (arr1.length !== arr2.length){
    return false;
  }
  for(var i=0;i<arr1.length;i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}

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

assertArrayEqual(countLetters("lighthouse in the house"),{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});