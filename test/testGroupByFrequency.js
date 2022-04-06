const assert = require('./assert.js').assert;
const countFrequency = require('../src/groupByFrequency.js').countFrequency;

const testElementsFrequencies = function (array, expected, message) {
  const actual = countFrequency(array);
  assert(actual, expected, message);
};

const countFrequencyTestCases = function () {
  testElementsFrequencies(
    [1],
    [[1, 1]], 'Single element.');
  testElementsFrequencies(
    [1, 2],
    [[1, 1], [2, 1]], 'Multiple elements.');
  testElementsFrequencies(
    [[1, 1], 2, [1, 1]],
    [[[1, 1], 2], [2, 1]], '2D array with a element repeated twice.');
  testElementsFrequencies(
    [[[1, 1]], [[1, 1]], 2, [[1, 1]], 2],
    [[[[1, 1]], 3], [2, 2]], '2D array with duplicate elements.');
};

countFrequencyTestCases();
