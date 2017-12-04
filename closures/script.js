/* jshint esversion: 6 */

console.log('hello');

function retirement(retirementAge) {
    var a = ' years left until retirement.';

    return function(yearOfBirth) {
    var age = 2017 - yearOfBirth;
    console.log((retirementAge - age) + a);
  };
}

var retirementUS = retirement(66);
retirementUS(1990);

retirement(65)(1996);