const indexOf = require('./groupBy.js').indexOf;

const countFrequency = function (array) {
  const groupedElements = [];
  for (let index = 0; index < array.length; index++) {
    let position = indexOf(groupedElements, array[index]);
    if (position === -1) {
      groupedElements.push([array[index], 0]);
      position = groupedElements.length - 1;
    }
    groupedElements[position][1]++;
  }
  return groupedElements;
};

// console.log(indexOf([[[1, 1], 1], [2, 1]], [[1, 1], 1]));

exports.countFrequency = countFrequency;
