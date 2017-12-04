/* jshint esversion: 6 */

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};


Person.prototype.calculateAge =
  function() {
    console.log(2017 - this.yearOfBirth);
  };

var john = new Person('John', 1945, 'teacher');
var jane = new Person('Jane', 1283, 'coder');

console.log(john.name);

john.calculateAge();


const emerson = 3;