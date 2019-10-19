const eqObjects = function(obj1, obj2) {
  if(Object.keys(obj1).length !== Object.keys(obj2).length){
    return false;
  }
  var keys = Object.keys(obj1);
  for(var i of keys){
    if(Array.isArray(obj1[i]) && Array.isArray(obj2[i])){
      if(!eqArrays(obj1[i],obj2[i])){
              return false;
      }
    }
    else if(obj1 instanceof Object){
      if(!eqObjects(obj1[i],obj2[i])){
        return false;
      }
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


console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false