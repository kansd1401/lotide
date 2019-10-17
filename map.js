const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`✅✅✅ The 2 arrays are equal: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 The 2 arrays are not equal: ${actual} !== ${expected}`);
  }
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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[word.length-1]);
const results3 = map(words, word => word.slice(1));
console.log(assertArrayEqual(results1,[ 'g', 'c', 't', 'm', 't' ]));
console.log(assertArrayEqual(results2,[ 'd', 'l', 'o', 'r', 'm' ]));
console.log(assertArrayEqual(results3,[ 'round', 'ontrol', 'o', 'ajor', 'om' ]));