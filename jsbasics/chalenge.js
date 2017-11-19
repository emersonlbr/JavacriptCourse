var johnHeight = 185;
var johnAge = 21;

var emersonHeight = 185;
var emersonAge = 22;

var rotHeight = 185;
var rotAge = 21;

var emersonScore = emersonHeight + (5 * emersonAge);
var johnScore = johnHeight + (5 * johnAge);
var rotScore = rotHeight + (5 * rotAge);

console.log('Emerson got ' + emersonScore );
console.log('John got ' + johnScore);
console.log('Rot got ' + rotScore);
console.log('so ');

if (emersonScore === johnScore && johnScore !== rotScore) {
  console.log('Emerson and John got the same score!');
}
else if (emersonScore === rotScore && johnScore !== rotScore) {
  console.log('Emerson and Rot got the same score!');
}
else if (rotScore === johnScore && johnScore !== emersonScore) {
  console.log('Rot and John got the same score!');
}

else if (johnScore > emersonScore && rotScore) {
  console.log('John is the winner with ' + johnScore);
} else if (rotScore > emersonScore && johnScore) {
  console.log('Rot is the winner with ' + rotScore);
}
else if (emersonScore > johnScore && rotScore) {
  console.log('Emerson is the winner with ' + emersonScore);
}

 else {
  console.log('All the players got the same score! ' + emersonScore + ' !');
};