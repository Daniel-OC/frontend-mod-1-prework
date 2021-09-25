/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
};

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
};

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
//Line 14 is the first half of an `if..else` statement. If the variable doorChoice is strictly equal to 1, then...
//Line 15 the variable bearClothing gets reassigned to "hat"
//Line 16 is the second half of the `if..else` statement. If the variable doorChoice is something other than strictly equal to 1, then...
//Line 17 the variable bearClothing gets reassigned to "scarf"
//Line 18 Gotta close them curly brackets!

2. What variable has a new value assigned to it after the first if statement executes?
// bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
// scarf

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
//Line 27 is again the opening of an `if..else` statement (though it will actually reveal itself to be an `if..elseif` statement shortly). If the variable bearChoice is strictly equal to 1, then..
//Line 28 the console logs the string "You offer the bear your ", then the variable bearClothing, then the string " and the bear shows you a secret passage out!"
//Line 29 is our first encounter with an `else if` statement! If the variable bearChoice is strictly equal to 2, then..
//Line 30 the console logs the string "You tell the bear the " then the variable bearClothing, then " is too small and it starts to cry!"
//Line 31 is another `else if` statement. If the variable bearChoice is strictly equal to 3, then..
//Line 32 the console logs the string "You run as fast as you can into the next room. It's full of snakes!")
//Line 33 is the closing statement for this  `if..elseif` chunk. If none of the previous statements are true (ie: the variable bearChoice isn't strictly equal to 1, 2, or 3,) then..
//Line 34 the console logs the string "You stay with the bear and become it's best friend!"
//Line 35 CLOSE THEM CURLY BRACKETS!!!


5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
//The console will log "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
//From the perspective of the person playing this game:
// You will walk through door one, and see a bear putting on a hat. You then tell the bear his hat is too small and the bear will start to cry!!


7. What is your favorite ending?
// My favoriet ending is for sure the one where I offer the bear my hat and it shows me a secret passage out. I'd love to stay with the bear and become it's best friend, but I've got quite a few friends already that I would feel like I had abandoned for this highly codependent bear. (I mean I JUST showed up and he wants me to stay forever? Not a healthy starting point.)
