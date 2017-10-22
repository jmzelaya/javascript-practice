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


// parkIsOpen is true ...duh :)
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
