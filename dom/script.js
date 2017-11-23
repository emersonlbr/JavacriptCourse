console.log('hello world!');

var home = document.querySelector('.home');
var btn = document.querySelector('.btn');
var h2 = document.querySelector('h2');

home.onmouseover = function() {
  // you have to use camel case cause js doesn't accept dashes
  this.style.backgroundColor = 'red';
  console.log('we just changed the home\'s color');
}

var emerson = {
  color: 'red',
  age: 21,
  country: 'Brazil',
  notes: [
    10,
    20,
    30,
    9
  ]
};

var lopes = ['red', 21, 'brazil'];


btn.onclick = function() {
  // you don't need the for loop
  // for (var i = 0; i < emerson.notes.length; i++) {
    home.innerHTML = '<h2>' + emerson.notes + '</h2>';
    // console.log(emerson.notes[i]);
};

document.querySelector('h3').addEventListener('mouseover', function () {
  this.style.backgroundColor = 'green';
  console.log('we just changed the h3\'s color');
});


