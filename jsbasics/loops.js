
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// };

console.log("hello");

var names = [
  'emerson',
  'lopes',
  'daniel',
  'matheus',
  'douglas'
];

// for loops
// for (var i = 0; i < names.length; i++) {
//   console.log(names[i]);
// };
//
// // the other way arround
// for (var i = names.length - 1; i >= 0; i--) {
//   console.log(names[i]);
// }



// while loops
var i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++
};

for (var i = 1; i <= 5; i++) {
  console.log(i);

// it breaks when i gets to 3, whithout ending the loop
  if (i === 3) {
    break;

  }
};

for (var i = 1; i <= 5; i++) {
  // it skips the number 3
  if (i === 3) {
    continue;
  }
  console.log(i);
  
};

