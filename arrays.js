
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(element, array) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(element, array) {
  array.push(element);
  return array;
}




