const eqObjects = function(obj1, obj2) {
  if(Object.keys(obj1).length !== Object.keys(obj2).length){
    return false;
  }
  var keys = Object.keys(obj1);
  for(var i of keys){
    if(!eqArrays(obj1[i],obj2[i])){
            return false;
    }
  }
  return true;
};

const eqArrays = function(arr1,arr2){
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)) // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)) // => false