## Section 1 Reflection

1. How did the SuperLearner Article resonate with you? What from this list do you already do? Want to start doing or do more of? Is there anything not on this list, that you would add to it?

- It resonated strongly with me. I read the book "The Brain that Changes Itself" by Norman Doidge like 5 years ago and have since then become pretty obsessed with neuroplasticity and the idea that we can all learn just about anything. I already practice spaced repitition and I try to foster a growth mindset, but I would like to do even better with my mindset during Turing, and I'd like to read non-technical things on a regular basis to help my brain relax its focus on my work.

2. What are the data types you learned about in this section? In your own words, define each.

number - Pretty self explanatory, numbers are numbers. unless that number is in quotes, then it's a string.

string - A string of characters within quotation marks. You can use either ' or " but whichever you choose to open the string also has to close the string.

boolean - A True/False logical test. By entering a logical statement, the computer will test if it's true, and return a response. For instance: 3 === 6 would return "False" because 3 is not equal to 6, but 3 <= 6 would return "True" because 3 IS less than or equal to 6. This will be helpful later on when doing things such as checking if a value exists in two separate tables.

3. How would you log the string `"Hello World!"` to the console?

console.log("Hello World!")

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?

//You would do this double slash. Anything after the slashes would then not be read by your machine. This allows you to leave notes or instructions in your code for yourself or future programmers.

5. In your own words, what is a variable? How would you explain it to a 5 year old?

A variable is a way of storing information for easy use multiple times in your code.

Were I talking to a five year old, I'd describe it as a "code word" used in computer programming. It's a secret code I have with the computer. "Psst, hey computer, from now on, when I say 'cat' you know that I mean 'Garfield'."

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?

Twitter Variables:
username: string
profile picture: image
followers: number

7. In your own words, explain what concatenation is.

concatention is the joining together of stuff. In javascript (at least up until this point), it means joining together disparate pieces of data into a single string. For instance, if:
var fruit = "watermelon"
var number = 6

console.log("I smashed like " + number + fruit "s")

is concatinating several pieces of data into one string.

8. Think of a site or app you use frequently. Where do you think the developers used concatenation?

Facebook's little "memory" montages they put together. There's a video script which says something like "Dan, you and Thomas have been friends for + **number_of_years** years," over that time you've interacted **number_of_interactions** times..." etc.



9. What questions do you still have about the work we've done so far? (not having a question is not an option)

How do you make a variable that actually varies? Right now we're largely using it to save ourself some typing, but let's say I have a table with 3 columns, how do I write a variable thats something like "row2column1", then write additional variables that depend on the first variable. For instance, in the example above, what if I want variable 2 to be the second column's row 2 cell, and variable three to be the third column's row 2 cell?
