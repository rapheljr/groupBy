const assert = require('./assert.js').assert;
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
    elementFrequency.push([unique[index], countFrequency(array, unique[index])]);
  }
  return elementFrequency;
};

const testElementsFrequencies = function (array, expected, message) {
  const actual = elementFrequencies(array);
  console.log(actual);
  console.log(expected);
  assert(actual, expected, message);
};

const elementFrequenciesTestCases = function () {
  testElementsFrequencies(
    [1],
    [[1, 1]], 'Single element.');
  testElementsFrequencies(
    [1, 2],
    [[1, 1], [2, 1]], 'Multiple elements.');
  testElementsFrequencies(
    [[1, 1], 2, [1, 1]],
    [[[1, 1], 2], [2, 1]], 'Nested elements.');
};

elementFrequenciesTestCases();
