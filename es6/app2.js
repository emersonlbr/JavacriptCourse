// jshint esversion: 6
// Suppose that you're working in a small town administration, and you're in charge of two town elements:
// 1. Parks
// 2. Streets
// 
// It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
// 
// At an end-of-year meeting, your boss wants a final report with the following:
// 1. Tree density of each park in the town (forumla: number of trees/park area)
// 2. Average age of each town's park (forumla: sum of all ages/number of parks)
// 3. The name of the park that has more than 1000 trees
// 4. Total and average length of the town's streets
// 5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
// 
// All the report data should be printed to the console.
// 
// HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

class Parks {
  constructor(name, buildYear) {
    this.name = name;
    this. buildYear = buildYear;
  }
}

const Park1 = new Parks('Central', 1930);
const Park2 = new Parks('VilaMa', 1940);
const Park3 = new Parks('Paulista', 1960);

let avgAge = ages / Parks[i];



console.log(Park1.buildYear, Park2.buildYear, Park3.buildYear);

class Streets {
  constructor(name, buildYear) {
    this.name = name;
    this.buildyear = buildYear;
  }
}

const Street1 = new Streets('Centro', 1994);
const Street2 = new Streets('Paixao', 1970);
const Street3 = new Streets('Consola', 1982);
const Street4 = new Streets('General', 1932);
console.log(Street1, Street2, Street3, Street4);

