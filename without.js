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

const without = function(source,toRemove){
  var result=source;
  for(var i=0;i<toRemove.length;i++){
    for(var j=0;j<source.length;j++){
      if(source[j]===toRemove[i]){
        result.splice(j,1);
      }
    }
  }
  return result;
}


assertArrayEqual(without([1, 2, 3], [1]),[2, 3])
assertArrayEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"])