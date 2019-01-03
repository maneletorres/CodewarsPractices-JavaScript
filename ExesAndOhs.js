/**
 * 
 * @author Manuel Espinosa Torres
 * 
 * Codewars exercise: "Exes and Ohs"
 * 
 * Description:
 * Check to see if a string has the same amount
 *  of 'x's and 'o's. The method must return a
 * boolean and be case insensitive. The string 
 * can contain any char.
 * 
 * Examples:
 * XO("ooxx") => true
 * XO("xooxx") => false
 * XO("ooxXm") => true
 * XO("zpzpzpp") => true
 * XO("zzoo") => false
 * 
 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function XO(str){
    // Alternative 1:
    /*var exes = 0;
    var ohs = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] == 'X' || str[i] == 'x'){
            exes++;
        } else if(str[i] == 'O' || str[i] == 'o'){
            ohs++;
        }
    }

    return exes == ohs;*/

    // Alternative 2:
    /*var exes = 0;
    var ohs = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i].match(/x/gi)){
            exes++;
        } else if(str[i].match(/o/gi)){
            ohs++;
        }
    }

    return exes == ohs;*/

    // Alternative 3:
    return (str.match(/x/gi) || []).length == (str.match(/o/gi) || []).length;
}

rl.question("Enter a word to tell if it has the same number of 'X' as of 'O': ", (userInput) => {
    console.log("Does the word '" + userInput + "' have the same number of 'X' as of 'O'?: " + XO(userInput));
    rl.close();
});