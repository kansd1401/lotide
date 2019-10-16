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
const middle = function(arr) {
  var centre=[];
  var mid=Math.floor(arr.length/2);
  if(arr.length<=2){
    return centre;
  }
  else if(arr.length % 2 === 0){
    centre.push(arr[mid-1],arr[mid]);
  }
  else {
    centre.push(arr[mid]);
  }
  return centre;
}

assertArrayEqual(middle([1]),[])
assertArrayEqual(middle([1, 2]),[])
assertArrayEqual(middle([1, 2, 3]),[2])
assertArrayEqual(middle([1, 2, 3, 4, 5]),[3])
assertArrayEqual(middle([1, 2, 3, 4]),[2, 3])
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4])