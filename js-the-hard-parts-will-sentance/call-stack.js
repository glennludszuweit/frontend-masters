const num = 3;

function multiplyByTwo(inputNum) {
  const result = inputNum * 2;
  return result;
}

const output = multiplyByTwo(num);
const newOutput = multiplyByTwo(10);

console.log(output);
console.log(newOutput);

//Generalized function
function squareNum(num) {
  return num * num;
}

console.log(squareNum(10));
console.log(squareNum(8));
console.log(squareNum(125));

//repeating functionality
function sample1() {
  function multiplyArrayByTwo(array) {
    const output = [];
    for(let i = 0; i < array.length; i++) {
      output.push(array[i] * 2);
    }
    return output;
  }
  const myArray = [1, 2, 3];
  const result = multiplyArrayByTwo(myArray);
  console.log(result);
}

function sample2() {
  function copyArrayAndDivideByTwo(array) {
    const output = [];
    for(let i = 0; i < array.length; i++) {
      output.push(array[i] / 2);
    }
    return output;
  }
  const myArray = [1, 2, 3];
  const result = copyArrayAndDivideByTwo(myArray);
  console.log(result);
}

function sample3() {
  function copyArrayAndAddByTwo(array) {
    const output = [];
    for(let i = 0; i < array.length; i++) {
      output.push(array[i] + 2);
    }
    return output;
  }
  const myArray = [1, 2, 3];
  const result = copyArrayAndAddByTwo(myArray);
  console.log(result);
}

sample1();
sample2();
sample3();

//higher order function
function copyArrayAndManipulate(array, instruction) {
  const output = [];
  for(let i = 0; i < array.length; i++) {
    output.push(array[i])
  }
}





