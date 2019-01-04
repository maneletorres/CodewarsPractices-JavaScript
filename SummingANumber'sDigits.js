/**
 * 
 * @author Manuel Espinosa Torres
 * 
 * Codewars exercise: "Summing a number's digits"
 * 
 * Description:
 * Write a function named sumDigits which takes a 
 * number as input and returns the sum of the 
 * absolute value of each of the number's decimal 
 * digits.
 * 
 * Examples:
 * sumDigits(10);  // Returns 1
 * sumDigits(99);  // Returns 18
 * sumDigits(-32); // Returns 5
 * 
 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumDigits(number){
    var result = 0;

    number = Math.abs(number);
    while(number >= 1){
        result += number % 10;
        number = parseInt(number / 10);
    }

    return result;
}

rl.question('Enter a number to calculate the absolute sum of its digits: ', (userInput) => {
    console.log("The absolute sum of the digits of the number '" + userInput + "' is: " + sumDigits(userInput));
    rl.close();
});