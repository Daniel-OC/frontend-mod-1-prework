/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line. Look back
at the directions from Section 1 if you need a refresher on how to do that.
*/

//-------------------
// PART 1: Comparing variables
//-------------------

var numberTeachers = 4;
var numberStudents = 20;
var stringTeachers = "4";
var numberDogs = 0;

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?

console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);

// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true

console.log("Is numberTeachers less than numberStudents", numberTeachers < numberStudents);

// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
// this should log: true

console.log("Is numberTeachers equal to stringTeachers?", numberTeachers == stringTeachers);

/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
// this should log: false

console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);

/*
Note: the strictly equal to operator compares the value of the variable in addition to the type of the variable.
since the numberTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 4,
the comparison still evaluates to false.

In JavaScript, it is a best practice to use the strict comparison. It is said that, anytime a developer
thinks they _need_ to use the `==` loose comparison, they are doing something they shouldn't be. To help
you develop good habits that follow best practice, from now on, use the strict comparison.
*/

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true

console.log("Is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true

console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false

console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true

console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true

console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21);

//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
//YOU DO: Explain.
//This is the comparison operator "less than". The code is checking if 4 is less than 9. Since 4 IS less than 9, it should return the boolean "true"

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
//The first line of code is assigning the variable "books" to 3.
// The second line of code is the comparison operator "less than".
//The code is then checking if 4 is less than the variable "books", which we know is equal to 3. 4 is not less than 3, so it should return the boolean "false"

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
// The first line of code is assigning the variable "friends" to 6
// The second line of code is assigning the variable "siblings" to 2
// The third line of code is using the comparison operator "greater than" to check if "friends" is greater than "siblings"
// Since **friends** is equal to 6 and **siblings** is equal to 2, 6 is greater than 2, and it will return the boolean "true"

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
// The first line of code is assinging the variable "attendees" to 9
// The second line of code is assigning the variable "meals" to 8
// The third line of code is using the comparison operator "not equal" to compare the variables attendees and meals
// Since  9 and 8 aren't equal, it should return the boolean "true"

//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age);

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:
//My final line of code came out as "1". From reading a little deeper in the && / || explainer in this section's readme, it seems like if the && statement can't return a boolean, it will return one of the two values within the logical test.
// In a && statement, if the first value can be coerced into "false", it'll return that value. if not, it'll return the second value
// Since lovesToPlay is set equal to true, it cannot be coerced into false and it returns the second value.
// To double check this was true, I reset lovesToPlay to "false" and ran the code again. Sure enough, it returned the value "false", rather than "1"

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
