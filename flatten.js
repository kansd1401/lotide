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

const flatten = function(arr){
  var unNested = [];
  for(var i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      for(var j=0;j<arr[i].length;j++){
        unNested.push(arr[i][j]);
      }
    }
    else{
      unNested.push(arr[i]);
    }
  }
  return unNested;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
