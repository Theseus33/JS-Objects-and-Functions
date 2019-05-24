/**
 * Object Oriented Programming
 * 
 * Objects interacting with one another through methods and properties
 * 
 * Used to store data, structure applications into modules and keeping the code clean.
 */
//Function Constructor
//object literal

var john = {
  name: "John",
  birthYear: 1990,
  job: "teacher"
};

//function constructor

//how to create new objects from a constructor called Instantiation
//the keyword new creates a brand new empty object
//the constructor function (in this case Person) is called with the arguments specified
//calling a function creates a new execution context that has a this variable
//a regular function this refers to the global object
//this variable of the function points to the empty object that was created when using the operator
var Person = function(name, birthYear, job) {
  this.name = name;
  this.birthYear = birthYear;
  this.job = job;
};

//to add a method to an existing prototype

Person.prototype.calcAge = function() {
  console.log(2019 - this.birthYear);
};

//to add properties a to an existing prototype and how inheritance works

Person.prototype.lastName = "Smith";

var john = new Person("John", 1990, "teacher");

var jane = new Person("Jane", 1969, "designer");

var mark = new Person("Mark", 1948, "retired");

john.calcAge();
jane.calcAge();
mark.calcAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
