/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

// EXAMPLE: Write code below that will declare a vairable that stores an Object Literal
//  that holds grocery store inventory
var foods = {
  apples: 23,
  grapes: 507,
  eggs: 48
};

console.log(foods);
// Notice that the variable name is foods, plural, because it has the ability to hold info about
// potentially many foods. That plural name indicates to another developer that the variable stores
// either an Array or an Object.

//-------------------
// Part 1: Zoo Animals
//-------------------

// YOU DO: Write code below that will declare a variable that stores an Object Literal of animal names and
// the number of that type of animal at the zoo.

var zooAnimals = {
  zebras: 15,
  penguins: 306,
  highlanders: 1
};


// Using the zoo that you created above, log the value of the first item in
// the Object

console.log(zooAnimals.zebras);

// Add an animal to the zoo Object, and log the updated Object.

zooAnimals.lions = 5;

console.log(zooAnimals);

// Change the value for at least one of your animal keys, and log the updated Object.

zooAnimals.penguins = 36;

console.log(zooAnimals);

// Add another animal to the zoo Object, and log the updated Object.
 zooAnimals.otters = 25;

 console.log(zooAnimals);

//-------------------
// Part 2: Email
//-------------------

/*
Think about all the pieces of information associated with one single email in your inbox.
It has a sender, a subject, ...

Declare a variable that stores an Object Literal. Each key should be an attribute of an email and each
value should be some appropriate value for that key. Work to have at least 5 key-value pairs.

Log your email object to the console.
*/


var email = {
  sender: "danieloconnell.maker@gmail.com",
  subject: "Too much fish sauce in this recipe!!",
  body: "Hello, my name is Daniel. Your recipe for Swedish Meatballs is bad. FAR too much fish sauce. Consider googling 'swedish meatballs' and trying again! Disgusted, Daniel O'Connell",
  timeSent: "10/11/2021 3:29am PST",
  attachments: "None"

}

console.log(email);

//-------------------
// Part 3: Many Emails - OPTIONAL EXTENSION
//-------------------

/*
LONG EXAMPLE:
Now that we've learned about Objects AND Arrays, we can combine them.

In the arrays exercise, we gave the following example of an array of Instagram posts:
*/

var posts = ["image at beach", "holiday party", "adorable puppy", "video of cute baby"];

/*
Frankly, that was a very simplified version of the Array the Instagram developers have
written and work with. Still probably slightly simplified as we don't know what their code
actually looks like, but it may look more like this:
*/

var posts = [
  {
    imageSrc: "./images/beach.png",
    caption: "At the beach with my besties",
    timeStamp: "4:37 PM August 13, 2019",
    numberLikes: 0,
    comments: []
  },
  {
    imageSrc: "./images/holiday-party.png",
    caption: "What a great holiday party omg",
    timeStamp: "11:37 PM December 31, 2019",
    numberLikes: 13,
    comments: []
  }
]

console.log(posts);
console.log(posts[0]);

/*
The code snippet above shows an Array with 2 elements. Each element in an
Object Literal. Each of those Object Literals has 4 key-value pairs. This may LOOK
a bit daunting - it's OK! You don't need to be 100% comfortable with this, but it's
good to have some exposure before going into Mod 1.
*/

// YOU DO: Create an array of at least 3 EMAIL Object Literals, using the same
// key-value pairs you used in your email Object above.
// Then, log the email Array to the console.

var emails = [
  {
    sender: "danieloconnell.maker@gmail.com",
    subject: "There is WAY too much fish sauce in this recipe!!",
    body: "Hello, my name is Daniel. I reached out earlier but the email must not have sent. Your recipe for Swedish Meatballs is bad. WAY too much fish sauce. Consider googling 'swedish meatballs' and trying again! Disgusted, Daniel O'Connell",
    timeSent: "10/11/2021 3:49am PST",
    attachments: "None"
  },
  {
    sender: "danieloconnell.maker@gmail.com",
    subject: "Following up!!",
    body: "Hi, Daniel again! I noticed you hadn't updated your Swedish Meatlball recipe. This leads me to one of two conclusions. 1.) You didn't see my email. 2.) You're ignoring my email. I like to assume the best in people so I'm assuming you just didn't see my email! Please respond so I know you've seen this! Still disgusted, Daniel",
    timeSent: "10/11/2021 5:52am PST",
    attachments: "None"
  },
  {
    sender: "danieloconnell.maker@gmail.com",
    subject: "My mistake...",
    body: "It turns out I had clicked the wrong recipe. That's my bad. Disgusted (with myself), Daniel",
    timeSent: "10/11/2021 5:54am PST",
    attachments: "None"
  }
]

console.log(emails);
