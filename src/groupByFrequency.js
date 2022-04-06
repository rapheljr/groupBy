const isEqual = require('./isEqual.js').isEqual;
const uniqueElements = require('./groupBy.js').uniqueElements;

const countFrequency = function (array, element) {
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    if (isEqual(element, array[index])) {
      count++;
    }
  }
  return count;
};

const elementFrequencies = function (array) {
  const unique = uniqueElements(array);
  const elementFrequency = [];
  for (let index = 0; index < unique.length; index++) {
    const frequency = countFrequency(array, unique[index])
    elementFrequency.push([unique[index], frequency]);
  }
  return elementFrequency;
};

exports.elementFrequencies = elementFrequencies;
