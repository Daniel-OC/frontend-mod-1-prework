## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

My workflow actually didn't change dramatically, because I've been using the pomodoro technique for all of mod 0. I did, however, experiment with different lengths of time, and the results were interesting. They also seem to be covered by the next question so I'm gonna jump over and talk more there.

1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

I typically do the 25mins on, 5 mins off pattern. I adjusted to 20 mins one day, and 30 another. 20 was nowhere near enough, if anything I felt agitated because I kept interrupting my own workflow. 30 was pretty good. I honestly am going to keep experimenting, because when I'm working at my best, it feels like it's in long extended periods. I used to work creatively for 90 minute chunks. Maybe I'll bring that back. 90 minutes on, 30 minutes off?

In general I notice that I have a hard time getting refocused if my focus is broken, that held true this week especially with the 20 minute experiment.


1. What is an Object, and how is it different from an Array in Javascript?

An object is a way of storing data. It's different in that an Array's data is accessible only by index, whereas an object's data is accessible by strings. This makes it easier to recall specific pieces of information later.

If you wanted to store a list of items you need to get at the grocery store, an array would work great, because you just need a list.

If you wanted to store a bunch of facts about Michael Jordan in a way that you could easily look up specifics from later, an object would be better. If you tried to store it in an array you'd just have a list of facts, with no way to easily navigate your way to one specific fact. If you store it in an object, you can then easily prompt specifics later. (michaelFacts.height might be set up to return "6'6"")


1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class
    - Array! If the students are the "values" what are the keys? I genuinely couldn't tell you. What you're looking for here is just a list. An array would work great for that
  * List of states and their capitals
    - Object. You can set each state as a key, and store the state's capitol as the value. Then later you can easily look up each specific state. (stateCapitol.washington = olympia)
  * List of things to pack for vacation
    - Array. Once again, you just need a list. The key/value pairings aren't obvious to say the least
  * Names of all the Instagram accounts I follow
    - Not to beat a dead horse, but if you're looking for a basic list, you're looking for a dang array, my friend.
  * List of student names and their cohort
    - Object! You make each student their own key, then by calling their value you can find out which cohort they're in
  * Ingredients and amount of each ingredient to bake a cake
    - My instinct is an object? The keys would be the specific ingredient, and the values would be the amount of that ingredient needed.
  * All my favorite restaurants
    - Array! Its just a dang list, friendo!

1. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

NBA player stats on basketballreference.com! Each player likely is their own object, with values such as player.points, player.rebounds, player.steals, etc. Those values would call back the corresponding game data.

1. What questions do you still have about classes and/or Objects?

How do you do "object oriented modeling"? I'm really really looking forward to learning to represent the real world in code. I have a hard time imagining how to link together all the small representations you make for an object in a way that helps solve organic problems. That and Pseudocoding are the skills i'm most excited to learn/hone.
