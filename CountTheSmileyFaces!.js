/**
 * @author Manuel Espinosa Torres
 * 
 * Codewars exercise: "Count the smiley faces!"
 * 
 * Description:
 * Given an array (arr) as an argument complete the function 
 * countSmileys that should return the total number of 
 * smiling faces.
 * 
 * Rules for a smiling face:
 * - Each smiley face must contain a valid pair of eyes.
 *   Eyes can be marked as : or ;
 * - A smiley face can have a nose but it does  not have to.
 *   Valid characters for a nose are - or ~
 * - Every smiling face must have a smiling mouth that 
 *   should be marked with either ) or D.
 * 
 * No additional characters are allowed except for those
 * mentioned.
 * 
 * Valid smiley face examples:
 *      :) :D ;-D :~)
 * 
 * Invalid smiley faces:
 *      ;( :> :} :] 
 *
 * Examples:
 * countSmileys([':)', ';(', ';}', ':-D']); // should return 2;
 * countSmileys([';D', ':-(', ':-)', ';~)']); // should return 3;
 * countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
 * 
 * Note:
 * In case of an empty array return 0. You will not be tested with
 * invalid input (input will always be an array). Order of the face
 * (eyes, nose, mouth) elements will always be the same
 * 
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var arrays = new Array(3);
arrays[0] = [':)', ';(', ';}', ':-D'];
arrays[1] = [';D', ':-(', ':-)', ';~)'];
arrays[2] = [';]', ':[', ';*', ':$', ';-D']; 

function countSmileys(arr){
    var count = 0;

    for(var i = 0; i < arr.length; i++){
        if(arr[i].length == 2){
            if((arr[i].charAt(0) == ':' || arr[i].charAt(0) == ';') && (arr[i].charAt(1) == ')' || arr[i].charAt(1) == 'D')){
                count++;
            }
        } else if(arr[i].length == 3){
            if((arr[i].charAt(0) == ':' || arr[i].charAt(0) == ';') && (arr[i].charAt(1) == '-' || arr[i].charAt(1) == '~') && (arr[i].charAt(2) == ')' || arr[i].charAt(2) == 'D')){
                count++;
            }
        }
    }

    return count;
}

rl.question('Array 1: ' + arrays[0] + "\n" 
            + 'Array 2: ' + arrays[1] + "\n"
            + 'Array 3: ' + arrays[2] + "\n"
            + 'Enter a number to choose the array on which you want to apply the function "Count the smiley faces!" [1-3]: ', (userInput) => {
    console.log('Number of smiley faces of the array' + (userInput) + ": " + countSmileys(arrays[userInput - 1]));
    rl.close();
});