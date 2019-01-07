/**
 * 
 * @author Manuel Espinosa Torres
 * 
 * Codewars exercise: "Replace With Alphabet Position"
 * 
 * Description:
 * In this kata you are required to, given a string, replace every letter with * its position in the alphabet.
 * 
 * If anything in the text isn't a letter, ignore it and don't return it.
 * "a" = 1, "b" = 2, etc.
 * 
 * Example:
 * 'alphabet_position("The sunset sets at twelve o' clock.")' should return "20 * 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a  * string).
 * 
 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function alphabetPosition(text){
    // Alternative 1:
    /*var lowercaseText = text.toLowerCase();
    var result = "";
    for(let i = 0; i < lowercaseText.length; i++){
        if(lowercaseText.charCodeAt(i) >= 97 && lowercaseText.charCodeAt(i) <= 122){
            result += lowercaseText.charCodeAt(i) - 96 + " "; 
        }
    }

    return result.trim();*/

    // Alternative 2:
    var result = text.toLowerCase().match(/[a-z]/g);
    return result != null ? result.map(l => l.charCodeAt() - 96).join(' ') : '';
}

rl.question('Enter a text: ', (userInput) => {
    console.log("The result of applying the 'Replace With Alphabet Position' function to the text '" + userInput + "' is: " + alphabetPosition(userInput));
    rl.close();
});