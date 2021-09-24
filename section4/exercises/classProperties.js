/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog

class Dog {
}

var jackRussell = new Dog();
var goldenDoodle = new Dog();

console.log(jackRussell);
console.log(goldenDoodle);

// Prompt 2: Snack

class Snack {
}

var cheetos = new Snack();
var trailMix = new Snack();

console.log(cheetos);
console.log(trailMix);

// Prompt 3: Shirt

class Shirt {
}

var polo = new Shirt();
var tee = new Shirt();

console.log(polo);
console.log(tee);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog

class ForAdoption {
  constructor(weight, color, food) {
    this.weight = weight;
    this.furColor = color;
    this.foodPreference = food;
  }
}

var jackRussell = new ForAdoption(18, "Black, brown, and white", "Salmon for small breeds");
console.log(jackRussell);

// Prompt 2: Snack

class SnackChoice {
  constructor(protein, fat, carbs) {
    this.Protein = protein;
    this.Fat = fat;
    this.Carbs = carbs
  }
}

var cheetos = new SnackChoice(0,0,"Infinite")
console.log(cheetos);

// Prompt 3: Shirt

class ShirtType {
  constructor(sleeveLength, material, formality) {
    this.sleeve = sleeveLength;
    this.material = material;
    this.formality = formality;
  }
}

var polo = new ShirtType("Short", "Cotton", "Medium")
console.log(polo);
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog

class Pet {
  constructor(species, weight, age) {
    this.species = species;
    this.weight = weight;
    this.age = age;
  }
}

var Winston = new Pet("Dog", "25 lbs", 6)

var Salem = new Pet("Cat", "15 lbs", 15)

console.log(Winston);
console.log(Salem);


// Prompt 2: Snack

class SnackOrder {
  constructor(seatNumber, snack, hasPaid) {
    this.SeatNumber = seatNumber;
    this.SnackChoice = snack;
    this.hasPaid = hasPaid;
  }
}

var johnGreen = new SnackOrder("14C", "Just Coffee", true)

var terryLaforge = new SnackOrder("3A", "Vodka and OJ", false)

console.log(johnGreen);
console.log(terryLaforge);

// Prompt 3: Shirt

class Shirts {
  constructor(size, color, inStock) {
    this.Size = size;
    this.Color = color;
    this.inStock = inStock;

  }
}

var lumberJack = new Shirts("XL","Red/Black", 3)

var prep = new Shirts("XM", "White as freshly fallen Snow", "0, what is this, 2009?!")

console.log(lumberJack);
console.log(prep);
