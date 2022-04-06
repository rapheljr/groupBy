const assert = require('./assert.js').assert;
const elementFrequencies = require('../src/groupByFrequency.js').elementFrequencies;

const testElementsFrequencies = function (array, expected, message) {
  const actual = elementFrequencies(array);
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
