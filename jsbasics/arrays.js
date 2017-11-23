
var names = ['john', 'jane', 'mark'];
var years = new Array(1190, 1823, 1283);

console.log(names[2] + ' ' + years[2]);
// mutated an ellement
names[1] = 'ben';
console.log(names);

var emerson = ['emerson', 'lopes', 1192, 'student', false, 'worker'];

// adds an ellement to the end
emerson.push('blue');

// adds an ellement to the beginning
emerson.unshift('mr.')

// removes an element from the end
emerson.pop();

// removes an element on the beginning
emerson.shift();

// finds the index
// if it cant find an element it returns -1
emerson.indexOf('lopes');


if (emerson.indexOf('worker') !== -1) {
  console.log("emerson is a worker");
}
else {
  console.log('could not find it');
}
