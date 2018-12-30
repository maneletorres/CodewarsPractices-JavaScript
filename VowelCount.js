/**
 * 
 * @author Manuel Espinosa Torres
 * 
 * Codewars exercise: "Vowel Count"
 * 
 * Description:
 * Return the number (count) of vowels in the given string.
 * 
 * We will consider a, e, i, o, and u as vowels for this Kata.
 * 
 * The input string will only consist of lower case letters and/or spaces.
 * 
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getCount(str){
    return (str.match(/[aeiou]/g) || []).length;
}

rl.question('Enter a text to count how many vowels it contains: ', (userInput) => {
    console.log("The number of vowels that contains '" + userInput + "' is: " + getCount(userInput));
    rl.close();
});