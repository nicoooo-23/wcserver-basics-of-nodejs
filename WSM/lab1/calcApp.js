// calcApp.js
var engine = require('./mathEngine.js');

var sum = engine.add(45, 5);
var diff = engine.subtract(45, 5);

console.log("Sum total: " + sum);
console.log("Difference total: " + diff);