/*THIS IS WHERE I COMPLETE THE EXERCISES
  FOR CODESCHOOL'S JAVASCRIPT ROADTRIP PART 2 */

//----------------------------------//
//   Level 2 - Conditional Canyon   //
//----------------------------------//

//---------------------------//
//--2.2 A BASIC CONDITIONAL--//
//---------------------------//

/* Modify the while loop with a conditional that will only allow
a number to be printed if it is even. Your results should be the
even numbers from 10 to 2 in descending order. Think carefully
about how your code might decide if a number is even…modify the
while loop with a conditional that will only allow a number to be
printed if it is even. Your results should be the even numbers from
10 to 2 in descending order. Think carefully about how your code
might decide if a number is even… */


console.log("EXCERCISE 2.2 HERE---->");

var num = 10;

//as long as num is greater than 0
while (num > 0) {
  //Check if num is even
  if (num % 2 === 0) {

    //if it is even print the num
    console.log(num);

  }
    // THEN decrement num
   	num--;
    //Go back an check is while condition is still true.
}
console.log("<----END EXCERCISE 2.2");



//-------------------------------------------//
//--2.3 USING BOOLEAN FLAGS IN CONDITIONALS--//
//-------------------------------------------//

/*The Badlands National Park would like to print specific messages depending on whether the park is open or closed.

They’ve asked you to modify their badlands.js file to print one of the following messages depending on the boolean value (true or false) of the variable parkIsOpen. We’ve already established for you the status of the variable for today.

Add a pair of conditional statements to print one of the following messages to the console based on the parkIsOpen variable:

Welcome to the Badlands National Park! Try to enjoy your stay.
OR

Sorry, the Badlands are particularly bad today. We're closed! */

console.log("EXCERCISE 2.3 HERE---->");

var parkIsOpen = true;


// If parkIsOpen is true
if( parkIsOpen ){

  //display THIS message
	console.log("Welcome to the Badlands National Park! Try to enjoy your stay.");

//BUT if parkIsOpen is false
} else {

  //show THIS message instead
	console.log("Sorry, the Badlands are particularly bad today. We're closed!");
}
console.log("<----END EXCERCISE 2.3");


//-----------------------------------------//
//--2.5 PROBLEM SOLVING WITH CONDITIONALS--//
//-----------------------------------------//


/* Back at Death Valley, scientists could see that the Sheep Situation would
quickly get out of control. They have decided that, for any month the population
climbs above 10000, half of the sheep will be sent away to other regions.

Inside our for loop, insert an if statement that:

Removes half of the sheep population if the number of sheep rises above 10000.
Prints the number of sheep being removed to the console in the following format:
Removing <number> sheep from the population.

Note: To complete the challenge, you only need to insert the if statement.
You do not need to create an else statement or change any of the provided code.*/

console.log("EXCERCISE 2.5 HERE---->");

var numSheep = 4;
var monthsToPrint = 12;

// Starting at monthNumber being 1; As long as the monthNumber is lessthan or
// equal to the monthsToPrint(12); increment the monthNumber
for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  //if the number of sheep (numSheep) is greater than or equal to 10,000
  //if the number of sheep is less than 10,000 ignore this block
  if(numSheep >= 10000 ) {

    //Divide the number of sheep by half
    numSheep /= 2;

    //print the following message
  	console.log("Removing " + numSheep + " sheep from the population.");
  }

  // Multiply the number of sheep by 4
  numSheep *= 4;

  //Finally display THIS message
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
  //Start the loop again until the middle condition is false.
}
console.log("<----END EXCERCISE 2.5");


//---------------------------------------------------//
//--2.7 TOO MANY SHEEP! (OR, THE ELSE IF STATEMENT)--//
//---------------------------------------------------//

/* We’ve made a significant difference, but there are still
too many sheep for the fragile Death Valley ecosystem.
The Rangers would like you to implement the following
new plan for population reduction:

If the month is a multiple of 4, then find 75% of the sheep population.
Log that value to the console in the format below. Then, remove
that value from the total number of sheep.

Otherwise, if the population is above 10000, find half of the sheep population.
Log that value to the console in the format below. Then, remove that value from
the total number of sheep.

Use this format for logging sheep reduction:

Removing <number> sheep from the population.
Note: To complete the challenge, you only need to insert an if statement
and an else if statement. You do not need to create an else statement at
the bottom or change any of the provided code. */

console.log("EXCERCISE 2.7 HERE---->");

var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if(monthNumber % 4 === 0){
    var sheepToRemove = numSheep * 0.75;
    console.log("Removing " + sheepToRemove + " sheep from the population.");
    numSheep = numSheep - sheepToRemove;
  }

  else if (numSheep > 10000) {
  	sheepToRemove = numSheep / 2;
    console.log("Removing " + sheepToRemove + " sheep from the population.");
    numSheep = numSheep - sheepToRemove;
  }

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}
console.log("<----END EXCERCISE 2.7");


//--------------------------------------//
//--2.8 SOME DAM COMPLEX CONDITIONALS!--//
//--------------------------------------//

/* The people at the Hoover Dam have called you back, and would like a program that shows what happens when only the even numbered turbines are turned on. And they want it all in just one for loop.

With a set of complex conditional statements inside the loop, construct a way to only turn on even numbered turbines. Remember our power output situation:

Generators 1 through 4 produce 62 MW.
Generators 5 through 19 produce 124 MW.
The output should follow this format:

Generator #1 is off.
Generator #2 is on, adding 62 MW, for a total of 62 MW!
We’ve given you some starting variables to use in your build. Within your loop, consider the possible scenarios when building your conditions:

The Generator provides 62 MW of power.
The Generator provides 124 MW of power.
The Generator is off. */

var totalGen = 19;
var totalMW = 0;


for(var currentGen = 1	;	currentGen <= totalGen	;	currentGen++){
  if(currentGen <= 4 && currentGen % 2 === 0){
    totalMW += 62;
  	console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
  } else if (currentGen > 4 <= totalGen && currentGen % 2 === 0) {
  	totalMW += 124;
    console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");

  }

    else {
    	console.log("Generator #" + currentGen + " is off.");
    }
}


//--------------------------------//
//   Level 3 - Built-In's Bluff   //
//--------------------------------//

//----------------------//
//--3.2 POP-UP WINDOWS--//
//----------------------//

/* The Park Rangers at Badlands National Park
have decided that the browser console is not
a very pretty or efficient way to display
their greeting to the user. Change the code
below to use a pop-up window that displays to
the user whether or not the park is open. */

var parkIsOpen = false;

if (parkIsOpen) {
  alert("Welcome to the Badlands National Park! Try to enjoy your stay.");
} else {
  alert("Sorry, the Badlands are particularly bad today. We're closed!");
}

//--------------------------//
//--3.3 POP-UP WINDOWS II --//
//--------------------------//

/* In userProfile.js below, ask the user for their age with a pop-up window function, and store the user’s response in a variable called userAge. Use the following question in the dialog box:

"What's your age, user?"
When the correct dialog box pops up, enter your age to complete the challenge. */

var userAge = prompt("What's your age, user?");

//---------------------------//
//--3.4 POP-UP WINDOWS III --//
//---------------------------//

/* With the userAge variable, we can ensure that the user has entered their age correctly. Use a pop-up window function to confirm the user entry with the following message:

"You entered <age>. Is this correct?"
Then store the result of the confirmation in a variable called ageIsCorrect. When you submit your code, enter your age in the prompt window, and then use the confirmation to select whether the entry is correct or incorrect.

Note: You do not need any loops or conditionals to complete this challenge. */

var userAge = prompt("What's your age, user?");

var ageIsCorrect = confirm("You entered " + userAge + ". Is this correct?");


//------------------------------------//
//-- 3.5 AN ENTRY CONFIRMATION LOOP --//
//------------------------------------//

/* We’ve learned to prompt the user for their age, and then confirm that their age has been entered correctly. Now we can use a while loop to improve the way this works.

Create a while loop that will continue to execute as long as the user has not entered the correct age. Inside the loop, provide a confirmation that the age has been entered correctly:

"You entered <age>. Is this correct?"
If that confirmation statement is correct, then set ageIsCorrect to true and alert the following message:

"Great! Your age is logged as <age>."
Otherwise, the loop should continue to prompt a user to enter their age and assign that value to the userAge variable:

"What's your age, user?" */



var ageIsCorrect = false;

while(ageIsCorrect === false){

  var userAge = prompt("What's your age, user?");

  if(confirm("You entered " + userAge + ". Is this correct?")) {

    console.log("Great! Your age is logged as " + userAge + ".");

    ageIsCorrect = true;
  }
}


//------------------------------------------//
//   Level 4 - The Desert of Declarations   //
//------------------------------------------//

//-----------------------------------------//
//-- 4.2 A BASIC MULTIPLICATION FUNCTION --//
//-----------------------------------------//

/* In the uniqueMath.js file, build a function
declaration called multiplyTrio that takes in
three parameters. Inside the function, multiply
the numbers together into one product, and
return the result. You may use whatever parameter
and variable names you’d like.*/

var a;
var b;
var c;

function multiplyTrio (a, b, c){
	return a * b * c;
}


//---------------------------//
//-- 4.3 CALLING FUNCTIONS --//
//---------------------------//


/* Call your multiplyTrio function from the console
using the numbers 8, 4, and 10. */

multiplyTrio(8, 4, 10);

//----------------------------//
//-- 4.4 MORE DECLARACTIONS --//
//----------------------------//

/* Build a function declaration called maxOf2
that takes in two numbers and returns the
greater value. Be careful to think about the
possibility of equality as well and return one
of the numbers. */

function maxOf2 (a, b) {
  if(a > b){
  	return a;
  } else {
  	return b;
  }
}

//---------------------------------------------------//
//-- 4.5 REFACTORING FOR EFFICIENCY AND LEGIBILITY --//
//---------------------------------------------------//

/* In uniqueMath.js, you’ll see a function
called mystery. Refactor the code in the
function to include only one line that
returns a value. */

function mystery(x, y) {
  return (4 * x * y) + (3 * y + 5);
}


//------------------------------------------//
//-- 4.7 PROBLEM SOLVING WITH FUNCTIONS I --//
//------------------------------------------//

/* The Park Rangers in Death Valley National Park divide up the feed responsibilities daily for the Bighorn Sheep population. Each sheep needs 2 lbs of ranger-provided food per day.

Build a function called feedPerRanger that takes in:

The current population of sheep.
The number of Park Rangers available during the day.
The function should alert the amount of feed that each Park Ranger should be responsible for on that day. The output should match the following format:

Each Park Ranger should load <number> lbs of feed today. */

function feedPerRanger(currentSheep, numOfRangers    ) {
	var amountOfFeed = currentSheep * 2 / numOfRangers;

  alert("Each Park Ranger should load " + amountOfFeed + " lbs of feed today.");

}

//-------------------------------------------//
//-- 4.8 PROBLEM SOLVING WITH FUNCTIONS II --//
//-------------------------------------------//

/* Back at the Hoover Dam, the technicians have decided they want more control of which generators are on and off. So, they’ve asked you to develop a way to adjust the total megawatts generated upon the switch-on or switch-off of a single, chosen generator.

Build a function named changePowerTotal that takes in four parameters:

The total power generated (a number)
The generator ID for the current generator (a number)
The generator status (a string that says "on" or "off")
The amount of power produced by the current generator (a number)
Your function should:

If the current generator is set to "on", then add to the total power generated.
Or if the current generator is set to "off", then remove from the total power generated.
return the total power generated.
alert the technician in the following formats:
For switching on:

Generator #2 is now on, adding 62 MW, for a total of 62 MW!
For switching off:

Generator #2 is now off, removing 62 MW, for a total of 0 MW!
Note: You do not need to call the function. Build the function declaration without invoking it. */

function changePowerTotal (totalPower, genId, genStatus, amtPower) {
  if(genStatus === "on") {
  	totalPower += amtPower;
		alert("Generator #" + genId + " is now " + genStatus + ", adding " + amtPower + " MW, for a total of " + totalPower + " MW!");  } else {
  	totalPower -= amtPower;
    alert("Generator #" + genId + " is now " + genStatus + ", removing " + amtPower + " MW, for a total of " + totalPower + " MW!");
  }
  return totalPower;
}
