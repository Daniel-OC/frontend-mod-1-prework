## Section 3 Reflection

1. What are two points from the Growth Mindset article and/or video that either resonated with you, or were brand new to you?

- First: "Don't compare yourself to anyone." I've read mindset a few times, and have definitely come a long way in terms of my belief in my ability to grow, but I still get sucked down these awful wormholes of comparing myself to others. It definitely kills the growth mindset when you do it. I think focusing on doing it less might be the most effective leverage point available to me at the moment for growing this mindset.

- "Tomorrow will be better." It was comforting to hear Ms. Popoviciu talk about the fact that she still doesn't always have the growth mindset available to her. She simply does her best, and if she can't get back into it by a certain point, she calls it a night, comforting herself and priming her brain to improve the next day with a simple "omorrow will be better." DEFINITELY taking this practice as my own.

1. In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?

- I demonstrate a growth mindset most clearly in my relationship with my wife. When we have problems, I rarely catastrophize, we both do a good job of facing our problems head on, and believing we can grow through and past them. We both recognize that committing to someone for a lifetime means committing to several versions of a person while understanding that you will also change regularly. We approach it head on, having lengthy discussions about how our old patterns no longer serve us and which new ones we would like to nurture.

- I most often fail to display a growth mindset around "clutch-ness". I have rarely if ever been "clutch". I often think that I don't have the ability to maintain my performance under pressure. The reality is that I don't lack the ability, I lack a **strategy** for maintaining my performance under the pressure of the moment. The reality is that if I look at my life there are several instances of times in which I have displayed such an ability: presentations at school and performing comedy being at the top of the list. I'd really like to practice learning to stay calm in those moments in the rest of my life: playing sports, talking with people who I'm impressed by, etc.

1. Think of a web or mobile application you use regularly. Where is an example of a place that the developers probably use Arrays? Explain.

- NBA 2k Mobile: In the "store", there is a giant collection of players, shoes, and clothing you can buy. My guess is that it's a nested array. One array named "Store", which contains subarrays for each of the smaller subsets. For instance: var Store = [Players, Shoes, Clothing]. Players = [Luka Doncic, Trae Young, Jamal Murray]

1. In your own words, explain what an Array method is.

- An array method is a way of manipulating an array, adding or removing items within it.
- array.push and array.unshift allow you to add items to an array. unshift allows you to add the item to the beginning of the array, while push allows you to add it to the end of the array. This means that push is particularly valuable in situations where you want to add an item to the end of the array but don't know how long the array is. Instead of having to know that the array is 1252 items long, and adding something by typing array[1253] = "bananas", you can just type array.push(bananas)
- array.pop and array.shift are essentially the inverse of push and unshift. They allow you to remove items from the array


1. What is the purpose of a loop? When we would use a loop in conjunction with array vs. without?

- A loop is a way of telling the computer to execute a piece of code repeatedly.

- Loops w/ Arrays:
You would use a loop on an array if you had a bunch of data you needed to do a single task on repeatedly. For instance, if I was printing mailers to send to customers, I would have an array of addresses. Rather than typing a piece of code that sends one address to the printer, then writing another, then writing another, etc., I would use a loop. One piece of code that says "for each address in this array, send it to the printers."

- Loops w/o Arrays: If I wanted a task ran, but it didn't require interacting with any other databases. For instance, if I wanted to print to the console "Don't forget to come to this week's PTA meeting where we'll be watching the PTA classic 'The Master'." 16 times, I would write a loop once that ended after 16 loops rather than 16 pieces of individual code that each print the message.


1. If you had to teach a 5 year old about loops, how would you explain it?

- A loop is a way of telling a computer to do something repeatedly. If I was building a robot that made PB&Js for everyone in kindergarten, for instance, without loops I would have to tell a robot to make a PB&J 21 separate times (for each student). But I'm LAZY! I don't want to write that 21 times! A loop is a way that I can write it just once, and the robot will make 21 sandwiches.

1. What questions do you still have about Arrays and loops?

- What does "let" mean and what are the nuances between using different types of variables in loops?
- How often are arrays nested, and how often are they simply called from their disparate locations?
