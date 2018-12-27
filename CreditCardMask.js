/**
 * 
 * @author Manuel Espinosa Torres
 * 
 * Codewars exercise: "Credit Card Mask"
 * 
 * Description:
 * Usually when you buy something, you're asked whether your 
 * credit card number, phone number or answer to your most 
 * secret question is still correct. However, since someone 
 * could look over your shoulder, you don't want that shown 
 * on your screen. Instead, we mask it.
 * 
 * Your task is to write a function maskify, which changes 
 * all but the last four characters into '#'.
 * 
 * Examples:
 * maskify("4556364607935616") == "############5616"
 * maskify(     "64607935616") ==      "#######5616"
 * maskify(               "1") ==                "1"
 * maskify(                "") ==                 ""
 * 
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function maskify(cc){
    var result = "";

    for(var i = 0; i < cc.length; i++){
        if(i <= cc.length - 5){
            result += "#";
        } else {
            result += cc.charAt(i);
        }
    }

    return result;
}

rl.question('Enter a word to mask it: ', (userInput) => {
    console.log('Masked result: ' +  maskify(userInput) + '.');
    rl.close();
});