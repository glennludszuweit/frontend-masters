//function() closure
function outer() {
  let counter = 0;
  function incrementCounter() {
    counter ++;
    console.log(counter)
  }
  return incrementCounter;
}
const newFunc = outer();
console.log(newFunc);
newFunc();
newFunc();