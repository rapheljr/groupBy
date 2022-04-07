const isEqual = function (lhs, rhs) {
  const stack = [[lhs, rhs]];
  while (stack.length > 0) {
    const element = stack.pop();
    const bothElementsAreArrays = Array.isArray(element[0]) && Array.isArray(element[1]);
    if (!bothElementsAreArrays) {
      if (element[0] !== element[1]) {
        return false;
      }
    }
    const array1 = element[0];
    const array2 = element[1];
    if (array1.length !== array2.length) {
      return false;
    }
    for (let index = 0; index < array1.length; index++) {
      stack.push([array1[index], array2[index]]);
    }
  }
  return true;
};

exports.isEqual = isEqual;
