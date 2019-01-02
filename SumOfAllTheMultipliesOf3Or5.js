/**
 * 
 * @author Manuel Espinosa Torres
 * 
 * Codewars exercise: "Sum of all the multiplies of 3 or 5"
 * 
 * Description:
 * Your task is to write function findSum.
 * 
 * Upto and including n, this function will return the sum of 
 * all multiples of 3 and 5.
 * 
 * Examples:
 * findSum(5) should return 8 (3 + 5)
 * findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
 * 
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findSum(n){
    var result = 0;

    for(let i = 0; i <= n; i++){
        if(i % 3 == 0 || i % 5 == 0){
            result += i;
        }
    }

    return result;
}

rl.question('Enter a number to calculate the sum of all your multiplies of 3 and 5: ', (userInput) => {
    console.log("Result of adding the multiplies of 3 and 5 of the numer " + userInput + ": " + findSum(userInput) + ".");
    rl.close();
});