// jshint esversion: 6 

// let ages6 = years.map(el => 2016 - el);
// console.log(ages6);
// 
// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
// console.log(ages6);
// 
// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index + 1}: ${age}.`;
// });
// console.log(ages6);


// const map = " this is great!";
// let a = 4;
// 
// a = 3;
// console.log(`let make a sum 5 + 5 = ${5+5}`);
// console.log(a);
// 
// 
// let add = (y, x) => {
//   return y + x;
// };
// 
// let add1 = function(t, n) {
//   return t + n;
// };
// 
// 
// let b = add(3, 7);
// let o = add1(2, 5);
// 
// 
// console.log(b, o);

// CLASSES = FUNCTIONS CONSTRUCTERS 
// ES5 
// var Person5 = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };
// 
// Person5.prototype.calculateAge = function() {
//   var age = new Date().getFullYear - this.yearOfBirth;
//   console.log(age);
// };
// var john5 = new Person5('John', 1998, 'teacher');
// console.log(john5); 
// 
// 
// // ES6 
// class Person6 {
//   constructor (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//   calculateAge() {
//     var age = new Date().getFullYear - this.yearOfBirth;
//     console.log(age);
//   }
//   // static greeting() {
//   //   console.log('Hey there');
//   // }
// 
// }
// const john6 = new Person6('John', 1990, 'teacher');
// console.log(john6);
// // Person6.greeting();


// ES5
var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};
Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};
// Inherit functions
var Athlete5 = function(name, yearOfBirth, job, games, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.games = games;
  this.medals = medals;
};
Athlete5.prototype = Object.create(Person5.prototype);
var DumAthlete5 = new Athlete5('Dum', 1996, 'player', 5, 12);
console.log(DumAthlete5);


// ES6
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calculateAge() {
    let age = new date().getFullYear - this.yearOfBirth;
    console.log(age);
  }
}
class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, games, medals) {
    super(name, yearOfBirth, job);
    this.games = games;
    this.medals = medals;
  }
}

const DumAthlete6 = new Athlete6('Dum', 1996, 'Student', 34, 23);
DumAthlete5.calculateAge();
console.log(DumAthlete6);