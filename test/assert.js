const isEqual = require('../src/isEqual.js').isEqual;

const assert = function (actual, expected, message) {
  const testResult = isEqual(actual, expected);
  const status = testResult ? '✅' : '❌';
  // display(actual);
  // display(expected);
  display(status + ' - ' + message);

  return testResult;
};

const display = function (message) {
  console.log(message);
};

exports.assert = assert;
exports.display = display;
