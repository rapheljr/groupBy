const isEqual = require('./isEqual.js').isEqual;

const indexOf = function (array, element) {
  for (let index = 0; index < array.length; index++) {
    if (isEqual(element, array[index][0])) {
      return index;
    }
  }
  return -1;
};

const groupSameElements = function (array) {
  const groupedElements = [];
  for (let index = 0; index < array.length; index++) {
    let position = indexOf(groupedElements, array[index]);
    if (position === -1) {
      groupedElements.push([]);
      position = groupedElements.length - 1;
    }
    groupedElements[position].push(array[index]);
  }
  return groupedElements;
};

exports.groupSameElements = groupSameElements;
exports.indexOf = indexOf;
