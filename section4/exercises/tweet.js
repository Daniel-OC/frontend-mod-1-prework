/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
  this.author = author;
  this.content = content;
  this.timeStamp = timeStamp;
  this.numberOfLikes = numberOfLikes;
  this.comments = comments;
  }
  addLike(){
    this.numberOfLikes = this.numberOfLikes + 1
  }
  addComment(newComment){
    if (typeof newComment === 'string') {
      this.comments = this.comments.concat(newComment)
  }
}
}

var exampleOne = new Tweet('@wojespn',"Sources tell me that Nikola Jokic is 'a VERY big boy'", 'October 11, 2021 5:55 pm PST', 15, ['wow, cool!','he sure is!',"You've wronged me for the last time, Woj!!"]);

exampleOne.addComment("He's not THAT big");
exampleOne.addLike();
console.log(exampleOne);


var exampleTwo = new Tweet('@shamscharania', "Sources tell me that I've got a pretty good head of hair", 'November 45, 2022 5:67 xm PST', 100000, ['You sure do!', 'And an even better head for bball, if you ask me!', "Shams, I need the money I loaned you in 2013. It's an emergency, please pick up your phone"]);

exampleTwo.addComment("Have you considered quitting your job and dying, bro? Nobody even likes basketball anymore. It's all about international ping pong!");
exampleTwo.addLike();
console.log(exampleTwo);

var exampleThree = new Tweet('@danielofconnell', "sources tell me 'please stop calling us, you're not a real reporter!",'April 22, 2022 2:22 pm, PST', 0, ['lol get rekt, bro'])

exampleThree.addComment("Seriously, dawg, here's a link to help fix your life https://devry.edu/BeingLessBadAtLife")
exampleThree.addLike();
console.log(exampleThree);
