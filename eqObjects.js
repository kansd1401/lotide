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

const eqArrays = function(arr1, arr2){
  if (arr1.length !== arr2.length){
    return false;
  }
  for(var i in arr1){
    if(Array.isArray(arr1[i]) && Array.isArray(arr2[i])){
      if(!eqArrays(arr1[i],arr2[i])){
        return false;
      }
    }
    else if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}


