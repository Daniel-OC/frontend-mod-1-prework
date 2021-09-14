## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

I'm somewhere in between. If I have mentors/more advanced classmates, I tend to ask the question after spending 15 minutes googling, even if I have more ideas on what to google next. I just don't like the feeling of wasting time, so if someone else has already solved it, my instinct is to keep the workflow moving!

You didn't ask, but the best tip that I took from these blogposts was to explain your problem to an inanimate object. I love that and will absolutely be taking it. In my experience, often as I start to ask someone for help on something, I find my error, so transferring that practice onto an object who's not alive and therefore can't have it's time wasted is a hell of an idea.

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

Honestly it felt really good! I learn best by watching someone do something, then trying it immediately, so being freed up to watch videos and practice in real time felt like if anything it sped my learning up. My only concern is that while this is helpful for learning how to do something, it's not always a helpful method for learning things like vocabulary, or detailed nuances between how different parts of code function. I will need to learn to balance both of these things in Turing.


1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

- A conditional statement is an operation that says "do **this** if **these criteria are met**"
- A daily example would be "Take a shower IF you haven't taken one today and/or are stinky"
- A web application that uses a conditional: Any password portal:
  `IF the user enters information that corresponds to our user database, show them their account, ELSE keep them on this screen until they write a password and username that line up with our database of users.`


1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

- You start with an `if` statement, giving the program directions on what to do if the first condition is met.
- Then you do an `else if` statement, giving the program directions on what to do if the first condition isn't met, but the second one is.
- Then you do another  `else if` statement, giving the program directions on what to do if the first and second conditions aren't met but the third one is.
- You keep doing that until you run out of specific conditions you'd like the program to respond to.
- Once you've reached this point, you write an `else` function, telling the program -what to do if none of the prior conditions are met.


1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?
`&&` and `||`, aka logical operators.

If you want to know that both conditions are met exactly you write an `&&` between the two conditions.
If you want to know that either condition is met, you write an `||` between the two of them

1. What questions do you still have about `if` statements and/or functions?

- When would you use an `if` statement rather than an `if..else` statement? It seems to me that even in the examples in the book, an `if` statement doesn't make a ton of sense. For instance, in the example of passing/failing something, if someone passes it, they should receive a "congrats" message, but if they fail, *something* should happen, right? You wouldn't just design a situation where the screen doesn't change if you fail, I don't think.

- I'm once again curious how to best set up a function to work with multiple variables. For instance, in my `bffStatus` funtion from my functions.js document, how would I make that function operate on a list of names, rather than manually entering each duo of names one at a time?
