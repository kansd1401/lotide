//const assertArrayEqual = function(actual, expected) {
  //if(!eqArrays(Object.keys(actual),Object.keys(expected))){
    //console.log(`🛑🛑🛑 The 2 arrays are not equal: ${actual} !== ${expected}`);
    //return;
  //}
  //var keys = Object.keys(actual);
  //for(var i of keys){
    //if(eqArrays(actual[i]!==expected[i])){
      //console.log(`🛑🛑🛑 The 2 arrays are not equal: ${actual} !== ${expected}`);
      //return;
    //}
  //}
  //console.log(`✅✅✅ The 2 arrays are equal: ${actual} === ${expected}`);
//};

const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
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

const letterPositions = function(str) {
  const result = {};
  let letters = str.split(" ").join("");
  for (let i of letters) {
    let char = i;
    result[char]=[];
    let positions = [];
    for (let j in letters) {
      if (char === letters[j]) {
        positions.push(j);
      }
    }
    for(let k of positions){
      result[char].push(k);
    }
  }
  return result;
};
assertArrayEqual(letterPositions("hello").l,['2','3'])