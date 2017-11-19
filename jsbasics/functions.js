// DRY  - dont repeat yourself

function calculateAge(yearOfBirth) {
  var age = 2017 - yearOfBirth;
  return age;
};

var  ageEmerson = calculateAge(1996);
var ageMike = calculateAge(1984);
var ageRosa = calculateAge(1232);

// console.log(ageEmerson);
// console.log(ageRosa);
// console.log(ageMike);

// functions can call other functions
// calling calculate age function
function yearsRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement >= 0) {
    console.log(name + ' retires in ' + retirement + ' years');
  } else {
    console.log(name + ' has already retired.');
  }
};

// calling the function
yearsRetirement('Emerson', 1996);
yearsRetirement('Marry', 1936);
yearsRetirement('Stuagh', 1990);
yearsRetirement('Joshsua', 1992);


// ** Staments and expressions

// Staments do something, peforms an action
if (x === 5 ) {
  // do something
};

function someFun (par){
  // code
};


// expressions produce a value, a output
3 + 4;
var x =3;
var someFun = Function(par) {
  // code
};

