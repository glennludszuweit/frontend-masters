//Argument keyword
var createTuple = function (a, b, c, d) {
  console.log(arguments)
  return [[a, c], [b, d]];
}
createTuple('It', 'be', 'could', 'anyone', 'no one');

//Spread operator
var createTuple = (a, b, c, ...d) => {
  return [[a, c], [b, d]];
}
createTuple('It', 'be', 'could', 'anyone', 'no one');

// Array-like objects
const constructArr = function() {
  const arr = Array.prototype.slice.call(arguments);
  arr.push('the bar?')
  return arr.join(' ');
}
constructArr('was', 'it', 'in')

//Array.from
const arrFromm = function() {
  const arr = Array.from(arguments);
  arr.push('the bar?')
  return arr.join(' ');
}
constructArr('was', 'it', 'in')








