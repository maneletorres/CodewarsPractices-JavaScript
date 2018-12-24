/**
 * 
 * @author Manuel Espinosa Torres
 * 
 * Codewars exercise: "Square Every Digit"
 * 
 * Description:
 * Welcome. In this kata, you are asked to square every digit 
 * of a number.
 * 
 * Example:
 * If we run 9119 through the function, 811181 will come out,
 * because 92 is 81 and 12 is 1.
 * 
 * Note: 
 * The function accepts an integer and returns an integer.
 * 
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function squareDigits(num){
    var result = "";
    while(num > 0){
        result = Math.pow(num % 10, 2) + result;
        num = parseInt(num / 10);
    }

    return parseInt(result);
}

rl.question('Enter a number to start the "Square Every Digit" function: ', (userInput) => {
    console.log("The result of calculating the square of the digits of the number '"
     + userInput + "' is: " + squareDigits(userInput) + ".");
    rl.close();
});