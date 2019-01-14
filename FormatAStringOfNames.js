/**
 * 
 * @author Manuel Espinosa Torres
 * 
 * Codewars exercise: "Format a string of names like 'Bart, Lisa & Maggie'."
 * 
 * Description:
 * Given: an array containing hashes of names.
 * 
 * Return: a string formatted as a list of names separated by commas except for * the last two names, which should be separated by an ampersand.
 * 
 * Example:
 * list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
 * // returns 'Bart, Lisa & Maggie'
 * 
 * list([ {name: 'Bart'}, {name: 'Lisa'} ])
 * // returns 'Bart & Lisa'
 * 
 * list([ {name: 'Bart'} ])
 * // returns 'Bart'
 * 
 * list([])
 * // returns ''
 * 
 * Note: 
 * All the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
 * 
 */
/*const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});*/

function list(names){
    var result = "";

    if(names.length == 1){
        return names[0].name;
    } else {
        for(let i = 0; i < names.length; i++){
            if(i == names.length - 2){
                result += names[i].name + " & ";
            } else if(i == names.length - 1){
                result += names[i].name;
            } else {
                result += names[i].name + ", ";
            }
        }
    }
    
    return result;
}

var simpsonsList = [
    {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'}, {name: 'Marge'}
];

console.log(list(simpsonsList));

//rl.question('Question: ', (userInput) => {
    /*rl.close();
});*/