//the dot notation
const user1 = {
  name: 'Glenn',
  score: 3,
  increment: function() { user1.score++ }
};
user1.increment();
console.log(user1);

const user2 = {};
user2.name = 'Tony';
user2.score = 4;
user2.increment = function() { user2.score++ };
user2.increment();
console.log(user2)

const user3 = Object.create(null);
user3.name = 'Amor';
user3.score = 6;
user3.increment = function() { user3.score++ }
user3.increment();
console.log(user3);

//factory functions
//generate objects using function
function createUser(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function() { 
    newUser.score++ 
  }
  return newUser;
}

const user4 = createUser('Doug', 9);
const user5 = createUser('Katt', 11);

user4.increment();
user5.increment();

console.log(user4);
console.log(user5);

//generate object using prototype chain

function createNewUser(name, score) {
  const newUser = Object.create(newUserFunction);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const newUserFunction = {
  //increment: function() { 
  //  this.score++ 
  //}
  increment: function() { 
    const add1 = () => {
      this.score++ 
    }
    add1()
  }
}

const user6 = createUser('Tim', 17);
const user7 = createUser('Will', 7);

user6.increment();
user7.increment();

console.log(user6);
console.log(user7);















