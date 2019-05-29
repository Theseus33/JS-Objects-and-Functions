/**
 * Object Oriented Programming
 * 
 * Objects interacting with one another through methods and properties
 * 
 * Used to store data, structure applications into modules and keeping the code clean.
 */
//Function Constructor
//object literal
/*
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
*/

// Object.create
//we first define an object that will act as the prototype
//then we create an object based on that prototype

//prototype as a simble object
/*
var personProto = {
  calculateAge: function() {
    console.log(2019 - this.birthYear);
  }
};

var john = Object.create(personProto);
john.name = "John";
john.birthYear = 1990;
john.job = "teacher";

//object.create accepts a second param

var jane = Object.create(personProto, {
  name: { value: "Jane" },
  birthYear: { value: 1969 },
  job: { value: "designer" }
});
*/
//the difference between Object.create and the function constructor pattern is that Object.create
//inherits directly from the one we passed into the first argument
//the function constructor the newly created object inherits from the constructors prototype property

//Primitives VS Ovjects

//numbers strings booleans and undefineds  and null are Primitives, everything else are objects

/**
 * a big difference between primitives and objects is that Variables containing primitives actually hold the data
 * inside the variable itself.
 * 
 * variables associated with objects actually do not contain the object but instead contain a reference a place in memory
 * where the object is stored. It just points to it.
 * 
 */
/*
//primitives
var a = 23;
var b = a;
a = 46;
console.log(a); //returns 46
console.log(b); //returns 23
//this means that each of the variables hold their own copy of the data and do not reference anything

//objects

var abj1 = {
  name: "John",
  age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1); //returns 30
console.log(obj2); //returns 30

//all we did was create a new reference to the same object. they point to the same place in memory.

//functions

var age = 27;
var obj = {
  name: "Jonas",
  city: "Lisbon"
};

function change(a, b) {
  a = 30;
  b.city = "San Francisco";
}

change(age, obj);
console.log(age); //returns 27
console.log(city); //returns San Francisco
*/
//the function attempted to change the variables passed into it.
//The primitive has remained unchanged. The object has been mutated.
// we do not pass an object into a function but just the reference to that object.

//Passing functions as arguments.

/* FUNCTIONS ARE ALSO OBJECTS IN JAVASCRIPT

A function is an instance of the Object type.
A function behaves like any other object,
We can store functions in a variable.
We can pass a function as an argument to another function.
We can return a function from a function
-> first class functions
 */
/*
//Passing functions as Arguments

var years = [1990, 1965, 1937, 2005, 1998];

//we can write a function that will recieve an array and return a new result array and do
//calculations based on a calc function

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calcAge(el) {
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calcAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
*/

//FUCTIONS returning FUNCTIONS
/*
function interviewQuestion(job) {
  if (job === "designer") {
    return function(name) {
      console.log(name + ", can you please explain what UX design is?");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log("What subject do you teach, " + name + "?");
    };
  } else {
    return function(name) {
      console.log("Hello " + name + ", what do you do?");
    };
  }
}

var teacherQuestion = interviewQuestion("teacher");
var designerQuestion = interviewQuestion("designer");

teacherQuestion("John");
designerQuestion("Jane");

interviewQuestion("teacher")("Mark");
*/

//IIFE iMMEDIATELY INVOKED FUNCTION EXPRESSIONS
/*
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}

game();

//done as an IIFE
//in JS whats inside of parenthesis cannot be a statement
//JS knows to treat this as an expression and not as a declaration

(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

console.log(score); //shows as undefined

//we obtain data privacy and dont interfere with variables in the global scope
//we can only call the IIFE once since its not tied to a variable
//we arent using the IIFE to create a reusable function but
//but create a new score hidden from the outside scope.

(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
*/
