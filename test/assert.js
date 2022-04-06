const isEqual = require('../src/isEqual.js').isEqual;

const assert = function (actual, expected, message) {
  const testResult = isEqual(actual, expected);
  const status = testResult ? '✅' : '❌';
  if (status === '❌') {
    display('Actual   :', actual);
    display('Expected :', expected);
  }
  display(status + ' -', message);

  return testResult;
};

const display = function (msg1, msg2) {
  console.log(msg1, msg2);
};

exports.assert = assert;
exports.display = display;
