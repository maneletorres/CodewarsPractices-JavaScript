/**
 * 
 * @author Manuel Espinosa Torres
 * 
 * Codewars exercise: "Decipher this!"
 * 
 * Description:
 * You are given a secret message you need to decipher. Here are the things you * need to know to decipher it:
 * 
 * For each word:
 * - The second and the last letter is switched (e.g. Hello becomes Holle).
 * - The first letter is replaced by its character code (e.g. H becomes 72).
 * 
 * Note: 
 * There are no special characters used, only letters and spaces.
 * 
 * Examples:
 * decipherThis('72olle 103doo 100ya') // 'Hello good day'
 * decipherThis('82yade 115te 103o')   // 'Ready set go'
 * 
 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function decipherThis(str) {
    var strSplitted = str.split(' ');
    
    var result = "";
    for(let i = 0; i < strSplitted.length; i++){
        var word = strSplitted[i];

        var aux = "";
        var firstLetter = "";
        var rest = "";
        for(let j = 0; j < word.length; j++){
            var letter = word[j];

            if(letter.charCodeAt(0) >= 48 && letter.charCodeAt(0) <= 57){
                aux += letter;
            } else {
                rest += letter;
            }
        }

        firstLetter += String.fromCharCode(aux);

        if(rest.length == 1){
            result += firstLetter + rest + " ";
        } else {
            result += firstLetter + rest.charAt(rest.length - 1) + rest.substring(1, rest.length - 1) + rest.charAt(0) + " ";
        }
    }
    
    return result.trim();
}; 

rl.question('Enter the message you want to decipher: ', (userInput) => {
    console.log("The result of deciphering '" + userInput + "' is: " + decipherThis(userInput));
    rl.close();
});