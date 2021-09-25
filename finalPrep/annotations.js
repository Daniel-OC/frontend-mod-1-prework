// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// Declare the function buildABear with the parameters name, age, fur, clothes, specialPower
function buildABear(name, age, fur, clothes, specialPower) {
// Within that function, create the variable "greeting" that is assigned to the string below, with the name parameter filling itself in (via interpolation)
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
// Within buildABear, create a variable "demographics" which is assigned to an array containing the bears name and age
  var demographics = [name, age];
// Within buildABear, create a variable called  powerSaying that is assigned to the string below, with specialPower filling itself in (via string concatenation)
  var powerSaying = "Did you know that I can " + specialPower + " ?";
// Within buildABear create an object called builtBear that contains the following key value pairs:
  var builtBear = {
// Key: BasicInfo. Value: the demographics variable from above
    basicInfo: demographics,
// Key: clothes. Value: the clothes parameter
    clothes: clothes,
// Key: exterior. Value: the fur parameter
    exterior: fur,
// Key: cost. Value: the static value 49.99
    cost: 49.99,
// Key: sayings. Value: an array consisting of the greeting variable, the powerSaying variable, and the static string "Goodnight my friend!"
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
// Key: isCuddly. Value: the boolean 'true'
    isCuddly: true,
  };

//When this function is called, return the variable builtBear to the console (thereby giving you a summary of the bear)
  return builtBear
}

// call the buildABear function with the argument 'fluffy' for the parameter name, 4 for the parameter age, brown for the parameter fur, the array containing "pants, jorts, and tanktop" for the parameter clothes, and "give you nightmares" set for the parameter special power
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// same as above. Calls the buildABear function, but with the below arguments inserted for the parameters
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// Declare the function fizzBuzz with the parameters num1, num2, and range
function fizzBuzz(num1, num2, range) {
// Set up a for loop. Set the initial expression to 0. Next set the condition: Do the rest of the loop as long as i is less than or equal to the parameter range. Finally set the increment expression to i++, which will increase the value of i by 1 for each loop. (until i is = to range)
  for (var i = 0; i <= range; i++) {
// If i is exactly divisible by both num1 and num2 (no remainder), log "fizzbuzz" to the console
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
// If condition 1 isn't met, but i is exactly divisible by num1, log "fizz" to the console
    } else if (i % num1 === 0) {
      console.log('fizz');
// If neither of the above conditions are met, but i is exactly divisible by num2, log "buzz" to the console
    } else if (i % num2 === 0) {
      console.log('buzz');
// If none of the above conditions are met, log "i" to the console
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(3, 5, 100);
//You'll notice I changed the fizzbuzz below to fizzBuzz in order to double check that they ran as expected
fizzBuzz(5, 8, 400);
