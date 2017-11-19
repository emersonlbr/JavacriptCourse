// basic boloean logic
// AND && => true if all are true
// OR || => true if one is tru
// NOT ! => inverts true to false value

var age = 16;
if (age > 20) {
  console.log('John is a teenager');
} else {
  console.log('John is a man');
};

// switch statemaent

var job;

// job = prompt('What does John do?')

switch (job) {
  case 'teacher':
    console.log('John teaches kids');
    break;
  case 'driver':
    console.log('John drives a cab');
    break;
    case 'cop':
      console.log('John helps to fight crime');
      break;
  default:
    console.log('John does something else.');
}

