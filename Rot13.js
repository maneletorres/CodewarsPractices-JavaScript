/**
 * 
 * @author Manuel Espinosa Torres
 * 
 * Codewars exercise: "Rot13"
 * 
 * Description:
 * ROT13 is a simple letter substitution cipher that replaces
 * a letter with the letter 13 letters after it in the alphabet.
 * ROT13 is an example of the Caesar cipher.
 * 
 * Create a function that takes a string and returns the string
 * ciphered with Rot13. If there are numbers or special 
 * characters included in the string, they should be returned 
 * as they are. Only letters from the latin/english alphabet 
 * should be shifted, like in the original Rot13 "implementation".
 * 
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function rot13(message){
    // Alternative 1 - Less efficient:
    /*var result = "";

    for(var i = 0; i < message.length; i++){
        var asciiCode = message.charCodeAt(i);
        if((asciiCode >= 110 && asciiCode <= 122) || (asciiCode >= 78 && asciiCode <= 90)){
            result += String.fromCharCode(message.charCodeAt(i) - 13);
        } else if((asciiCode >= 97 && asciiCode <= 109) || (asciiCode >= 65 && asciiCode <= 97)){
            result += String.fromCharCode(message.charCodeAt(i) + 13);
        } else {
            result += String.fromCharCode(message.charCodeAt(i));
        }
    }

    return result;*/

    // Alternative 2 - More efficient:
    return message.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase().charCodeAt(0) <= 109 ? 13 : -13)));
}

rl.question('Enter the string you want to encrypt: ', (userInput) => {
    console.log('The result of encrypting the string "' + userInput + '" with ROT13 encryption is: ' + rot13(userInput));
    rl.close();
});