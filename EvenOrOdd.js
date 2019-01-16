/**
 * 
 * @author Manuel Espinosa Torres
 * 
 * Codewars exercise: "Even or Odd"
 * 
 * Description:
 * Create a function (or write a script in Shell) that takes an integer as an  * argument and returns "Even" for even numbers or "Odd" for odd numbers.
 * 
 */
// Individual script:
/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function even_or_odd(number) {
  return number % 2 == 0 ? "Even" : "Odd";
}

rl.question('Enter a number to start the "Even or Odd" function: ', (userInput) => {
  console.log("The number " + userInput + " is: " + even_or_odd(userInput) + ".");
  rl.close();
});*/

/**
 * Alternative approach:
 * 
 * Use of index for the export of the various functions of 
 * Codewars exercise.
 */
module.exports = { 
  even_or_odd: function even_or_odd(number){
    return "The number " + number + " is " + (number % 2 == 0 ? "even." : "ddd.");
  }
};