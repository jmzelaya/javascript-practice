/*THIS IS WHERE I COMPLETE THE EXERCISES
  FOR CODESCHOOL'S JAVASCRIPT ROADTRIP PART 2 */

//---------------------------//
//    Conditional Canyon     //
//---------------------------//

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



//-------------------------------------------//
//--2.3 USING BOOLEAN FLAGS IN CONDITIONALS--//
//-------------------------------------------//

/*The Badlands National Park would like to print specific messages depending on whether the park is open or closed.

They’ve asked you to modify their badlands.js file to print one of the following messages depending on the boolean value (true or false) of the variable parkIsOpen. We’ve already established for you the status of the variable for today.

Add a pair of conditional statements to print one of the following messages to the console based on the parkIsOpen variable:

Welcome to the Badlands National Park! Try to enjoy your stay.
OR

Sorry, the Badlands are particularly bad today. We're closed! */


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


//-------------------------------------//
//--PROBLEM SOLVING WITH CONDITIONALS--//
//-------------------------------------//


/* Back at Death Valley, scientists could see that the Sheep Situation would
quickly get out of control. They have decided that, for any month the population
climbs above 10000, half of the sheep will be sent away to other regions.

Inside our for loop, insert an if statement that:

Removes half of the sheep population if the number of sheep rises above 10000.
Prints the number of sheep being removed to the console in the following format:
Removing <number> sheep from the population.

Note: To complete the challenge, you only need to insert the if statement.
You do not need to create an else statement or change any of the provided code.*/


var numSheep = 4;
var monthsToPrint = 12;

// Starting at monthNumber being 1; As long as the monthNumber is lessthan or
// equal to the monthsToPrint(12); increment the monthNumber
for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  //if the number of sheep (numSheep) is greater than or equal to 10,000
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
