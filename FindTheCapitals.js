/**
 * 
 * @author Manuel Espinosa Torres
 * 
 * Codewars exercise: "Find the capitals"
 * 
 * Description:
 * Write a function that takes a single string 
 * (word) as argument. The function must return
 * an ordered list containing the indexes of 
 * all capital letters in the string.
 * 
 * Example:
 * capitals('CodEWaRs') --> [0,3,4,6]
 * 
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function capitals(word){
    //return word.split('').filter(letter => letter.toUpperCase() == letter);
    return word.replace(/[A-Z]/g, letter => word.indexOf(letter)).replace(/[a-z]/gi, '').split('').map(Number);
}

rl.question('Enter a text: ', (userInput) => {
    console.log("The indices of the uppercase letters of the entered text '" + userInput + "' are: [" + capitals(userInput) + "].");
    rl.close();
});