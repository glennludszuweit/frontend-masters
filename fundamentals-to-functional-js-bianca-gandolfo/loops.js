//NESTING

//let game = {};

//game.suspects = [];

//game.suspects.push({
//  name: 'Rusty',
//  color: 'Orange'
//});

//game.suspects.push({
//  name: 'Mrs. White',
//  color: 'White'
//});


let game = {
  suspects: [
    { name: 'Rusty', color: 'Orange' },
    { name: 'Mrs. White', color: 'White' }
  ]
}

function forLoop() {
  console.log('=================for=================');
  for (let i = 0; i < game.suspects.length; i++) {
    console.log(game.suspects[i]);
  }
}
forLoop();

function gameLoop() {
  for (let i = 0; i < game.suspects.length; i++) {
    console.log('inner');
    for (let key in game.suspects[i]) {
      console.log('outer');
      if (game.suspects[i][key] === 'Rusty') {
        console.log('Sudpect found!');
      } else {
        console.log('Suspects not found!');
      }
    }
  }
}
gameLoop();

function forIn() {
  console.log('=================for-in==============');
  for (let suspect in game.suspects) {
    console.log(game.suspects[suspect]);
  }
}
forIn();

function forOf() {
  console.log('=================for-of==============');
  for (let suspect of game.suspects) {
    console.log(suspect);
    console.log(suspect.name);
    console.log(suspect.color);
  }
}
forOf();

function forEach() {
  console.log('=================forEach============');
  game.suspects.forEach(function(suspect) {
    console.log(suspect);
    console.log(suspect.name);
    console.log(suspect.color);
  })
}
forEach()

//Call array property with destructuring
console.log('======================================');
let suspects = [
    { name: 'Rusty', color: 'Orange' },
    { name: 'Mrs. White', color: 'White' }
  ];

//no destructuring
let firstColor = suspects[0].color;
let secondColor = suspects[1].color;
console.log(firstColor, secondColor);

//destructuring
let [color1, color2] = [suspects[0].color, suspects[1].color];
console.log(color1, color2);

let [{color: colour}, {color: colour2}] = suspects;
console.log(colour, colour2)