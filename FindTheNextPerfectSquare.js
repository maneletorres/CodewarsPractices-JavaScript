/**
 * 
 * @author Manuel Espinosa Torres
 * 
 * Codewars exercise: "Find the next perfect square!"
 * 
 * Description:
 * You might know some pretty large perfect squares. 
 * But what about the NEXT one?
 * 
 * Complete the findNextSquare method that finds the 
 * next integral perfect square after the one passed 
 * as a parameter. Recall that an integral perfect 
 * square is an integer n such that sqrt(n) is also 
 * an integer.
 * 
 * If the parameter is itself not a perfect square, 
 * than -1 should be returned. You may assume the 
 * parameter is positive.
 * 
 * Examples:
 * findNextSquare(121) --> returns 144
 * findNextSquare(625) --> returns 676
 * findNextSquare(114) --> returns -1 since 114 
 * is not a perfect
 * 
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findNextSquare(sq){ 
    var nextSquare = -1;

    if(Number.isInteger(Math.sqrt(sq))){
        while(true){
            var number = ++sq;
            if(Number.isInteger(Math.sqrt(number))){
                nextSquare = number;
                break;
            }
        }
    }

    return nextSquare;
}

rl.question("Enter a number to find the next perfect number: ", (userInput) => {
    console.log("The next perfect square to the number " + userInput + " is: " + findNextSquare(userInput) + ".");
    rl.close();
});