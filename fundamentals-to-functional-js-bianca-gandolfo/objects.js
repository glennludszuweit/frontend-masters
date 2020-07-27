//OBJECTs
let game = {}

game.murderer = '??'

game['weapons'] = [
  {type: 'dagger', location: 'lab'},
  {type: 'screw', location: 'bedroom'},
  {type: 'lager', location: 'lounge'}
];

game.char = [];
game.char[0] = 'Tony';
game.char[1] = 'Gregg';
game.char[2] = 'Amor';
console.log(game.char);

game.room = [];
game.room.push('bedroom', 'lounge', 'conservatory');

console.log(game);


//ES6 DESTRUCTURING
//varibales declaration
let [var1, var2, var3] = ['im a string', 25, true];
console.log(var1);
console.log(var2);
console.log(var3);

let { first, second } = {first: 10, second: 20};
console.log(first);
console.log(second);

//assignment
[var1, var2, var3] = ['im 2nd string', 55, false];
console.log(var1);
console.log(var2);
console.log(var3);

//EXERCISE
let {name, location, weapon} = {name: 'Rusty', location: 'Kitchen', weapon: 'Candlestick'};

console.log(`${name}, ${location}, ${weapon}`);