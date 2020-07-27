'use strict';

//////////VARIABLES
console.log('Hello World');
var name = 'Gregg';
var age;
age = 39;
age++;
age += 2;
console.log(age);

//////////ARRAYS
var friends = ['Danylo', 'Ibrahim', 'Nisha'];
console.log(friends.length);
console.log(friends[1]);

age = 39;
age = 1 + age * 2;
console.log(age);

function goVote() {
  console.log('You are ready to vote!');
}
if (age >= 18) {
  goVote();
}

/////////if/else
var amount = 200;
function takeClass() {
  console.log('You are enrolled.');
}
function enrollFirst() {
  console.log('You are not enrolled.');
}
if (amount >= 150) {
  takeClass();
} else {
  enrollFirst();
}

/////////LOOPS
var students = ['Tony', 'Luisa', 'Mary', 'Joe'];

function greetStudents(student) {
  console.log(`Hello ${student}!`);
}
//for loop
for (let i = 0; i < students.length; i++) {
  greetStudents(students[i]);
}
for (let student of students) {
  greetStudents(student);
}
//foreach loop
students.forEach((student) => {
  greetStudents(student);
});
//While loop
while (students.length > 0) {
  let student = students.shift();
  greetStudents(student);
}

/////////FUNCTION
//Sample1
function timeRemaining(timeElapsed, endTime) {
  return endTime - timeElapsed;
}
var timeLeft = timeRemaining(55, 100);
console.log(timeLeft);

//Sample2
//books array
var favoriteBooks = [];

// add books to array
function addFavoriteBook(bookName) {
  //filter books title
  if (!bookName.includes('Great')) {
    favoriteBooks.push(bookName);
  }
}

// log books function
function printFavoriteBooks() {
  //   console.log(`Favorite Books: ${favoriteBooks}`);
  console.log(`Favorite Books: ${favoriteBooks.length}`);
  for (const bookName of favoriteBooks) {
    console.log(bookName);
  }
}

//books entry
addFavoriteBook(' A Song of Ice and Fire ');
addFavoriteBook(' The Great Gatsby ');
addFavoriteBook(' Crime & Punishment ');
addFavoriteBook(' Great Expectations ');
addFavoriteBook(" You Don't Know JS ");

// loop and log filtered books
// for (let i = 0; i < favoriteBooks.length; i++) {
//   printFavoriteBooks(favoriteBooks[i]);
// }
printFavoriteBooks();

///////////////////////TYPES & COERCION///////////////////////
//new
var yesterday = new Date('July 9, 2020');
yesterday.toUTCString();
console.log(yesterday);

var myGPA = 2.9;
myGPA = String(myGPA);
console.log(myGPA);

//coercion
var msg1 = 'There are ';
var ducklings = 15;
var msg2 = ' ducklings.';
console.log(msg1 + ducklings + msg2);
console.log(`There are ${ducklings} ducklings.`);
