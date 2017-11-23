// objects doesnt have a particular order

var emerson = {
  name: 'Emerson',
  age: 21,
  nationality: 'brazilian',
  occupation: 'student'
};

// console.log(emerson.age);

// if (emerson['nationality'] === 'brazilian') {
//   console.log('bitch');
// };

// you can also change values with both notations
emerson.age = '56';
emerson['name'] = 'Dum';
// console.log(emerson.age + ' ' + emerson.name);

// diff way to create an objects
var dum =  new Object();
dum.name = 'Lopes';
dum.age = 34;
// console.log(dum);

/* V1.0

var john = {
  name: 'john',
  lastname: 'smith',
  yearOfBirth: 1993,
  job: 'teacher',
  isMarried: false,
  family: ['jane', 'mark', 'bob'],
  // function expression
  // it would be the same as writing a variable function
  calculateAge: function() {
    // this means john
    return 2017 - this.yearOfBirth;
  }
};

// methods are functions associated with arrays
// calling the function
// console.log(john.calculateAge(1993));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;
console.log(john);

*/


// V1.1
var john = {
  name: 'john',
  lastname: 'smith',
  yearOfBirth: 1993,
  job: 'teacher',
  isMarried: false,
  family: ['jane', 'mark', 'bob'],
  // function expression
  calculateAge: function() {
    // 'this' means john
    // return 2017 - this.yearOfBirth;
    // it could be 'john.age'
    this.age = 2016 - this.yearOfBirth;
  }
};

john.calculateAge();
console.log(john);