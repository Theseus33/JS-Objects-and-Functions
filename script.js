`/**
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
*/
/*
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
*/
//done as an IIFE
//in JS whats inside of parenthesis cannot be a statement
//JS knows to treat this as an expression and not as a declaration
/*
(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

console.log(score); //shows as undefined
*/
//we obtain data privacy and dont interfere with variables in the global scope
//we can only call the IIFE once since its not tied to a variable
//we arent using the IIFE to create a reusable function but
//but create a new score hidden from the outside scope.
/*
(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);

*/
// CLOSURES

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);


//retirement(66)(1990);

//Closure: An inner function always has access to the variables and parameters dof the outer function;

//Rewriting the interview questions as closures;
//original
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
  */

  //with closures

  function interviewQuestion(job) {
      return function(name) {
          if (job === 'designer') {
            console.log(name + ", can you please explain what UX design is?");
          }
      } else if (job === 'teacher') {
            console.log("What subject do you teach, " + name + "?");
      } else {
            console.log("Hello " + name + ", what do you do?");
      }
  }
}

interviewQuestion('teacher')('John');

// BIND, CALL and APPLY

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: fucntion(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log(Hey@ What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay);
        }
    }
}

john.presentation('formal', 'morning');

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};
//call function will change the this variable to the emily object
//this is called method borrowing
john.presentation.call(emily, 'friendly', 'afternoon');

//this wont work but there is a similar method called apply
//this present an array as an argument

//john.presentation.apply(emily, ['friendly', 'afternoon']);

//bind is also similar and allows us to change the this variable explicitly but bind doesnt immediately call the function but instead it generates a copy of thefunction
// so we can store it somewhere. can use it to create functions with preset arguments

var johnFriendly = john.presentation.bind(john, 'friendly');
//only one argument left to swet which is timeOfDay

johnFriendly('morning');
johnFriendly('night');

//this is called 'currying' which is creating a function based on another function with some preset parameters

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');





var years = [1990, 1965, 1937, 2005, 1998];

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
//bind first argument has to be the this keyword
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(fullJapan);
console.log(ages);

/////////////////////
// CODING Challenge

/*
--- Lets build a fun quiz game in the console.! ---

1. Build a function constructor called Question to describe a question. A question should include: 
a) the question itself
b) the answers from which the player can choose the correct one (chose an adequate data structure here, array object, etc.)
c. correct answer (I would use a number for this)

2. Create a couple of questions using the constuctor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint:
write a method for the Question objects with this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the cirrect anseer such as you 
displayed it in Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method for this)

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't
interfere with the other programmers code. 

--- Expert Level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function forr this and call 
it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. SO include the option to quit the game if the user writes 'exit' instead of the 
answer. In this case, DONT call the function from task 8.

1-. Track the user's score to make the game more fun! So each time an answer is correct, add 1 poiint to the score. (Hint: I'm going to use
the power of closure sfor this, but you dont have to ), just do this with the tools you feel most comforatble with.

11. display the score in teh console. Use yet anotehr method for this.

//function constructor

(function()) {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    //display question
    Question.prototype.displayQuestion() = function () {
        console.log(this.question);
    
        for (var i - 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = 
    function(ans) {
        if (ans === this.correct) {
            console.log('Correct Answer!');
        } else {
            console.log('Wrong Answer! Try again!');
        }
    }
    
    // This works because hte new operator creates an empty object, then it calls the question function and sets
    //the this variable of the function to the empty object created. And therefore when we set all these properties
    //it will be set to the this variable of the new object. 
    
    var q1 = new Question('Is JavaScript the coolest language in the world?'),
    ['Yes', 'No'],
    0);
    
    
    var q2 = new Question('What is the name of this course\'s teacher?'),
    ['John', 'Michael', 'Jonas'],
    2);
    
    var q3 = new Question('What word best describes coding?'),
    ['Boring', 'Fun', 'Tedius'],
    1);
    
    var questions = [q1, q2, q3];
    
    var n = Math.floor(Math.random() * questions.length); 
    
    questions[n].displayQuestion();
    
    var answer = parseInt(prompt('Please select the correct answer.'));
    
    questions[n].checkAnswer(answer);
})();

//Expert Level Challenge


(function()) {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    //display question
    Question.prototype.displayQuestion() = function () {
        console.log(this.question);
    
        for (var i - 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = 
    function(ans) {
        if (ans === this.correct) {
            console.log('Correct Answer!');
        } else {
            console.log('Wrong Answer! Try again!');
            
            sc = callback(false);
        }

        this.displayScore(sc);
    }

    Question.prototype.displayScore = 
    function(score) {
        console.log('Your current score is: ' + score);
        console.log('-------------------------------');
    }
    
    // This works because hte new operator creates an empty object, then it calls the question function and sets
    //the this variable of the function to the empty object created. And therefore when we set all these properties
    //it will be set to the this variable of the new object. 
    
    var q1 = new Question('Is JavaScript the coolest language in the world?'),
    ['Yes', 'No'],
    0);
    
    
    var q2 = new Question('What is the name of this course\'s teacher?'),
    ['John', 'Michael', 'Jonas'],
    2);
    
    var q3 = new Question('What word best describes coding?'),
    ['Boring', 'Fun', 'Tedius'],
    1);
    
    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            } 
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion() {
        
        
        var n = Math.floor(Math.random() * questions.length); 
        
        questions[n].displayQuestion();
        
        var answer = prompt('Please select the correct answer.');
        callback(true);
        
        
        if(answer !== 'exit'){
            questions[n].checkAnswer(parseInt(answer), keepScore);

            nextQuestion();
        }
    }
    nextQuestion();

})();

