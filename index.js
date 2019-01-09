/**
 * 
 * @author Manuel Espinosa Torres
 * 
 * Index of Codewars exercises.
 * 
 */
const async = require('async');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const CreditCardMask = require('./CreditCardMask');
const EvenOrOdd = require('./EvenOrOdd');

function functionMenu(){
    console.log('----- CODEWARS EXERCISES -----');
    console.log('1) Count the smiley faces!');
    console.log('2) Credit Card Mask');
    console.log('3) Even or Odd');
    console.log('4) Exes and Ohs');
    console.log('5) Find the capitals');
    console.log('6) Find the next perfect square!');
    console.log('7) Multiplies of 3 or 5');
    console.log('8) Printer Errors');
    console.log('9) Rot13');
    console.log('10) Square Every Digit');
    console.log('11) Summing a number\'s digits');
    console.log('12) Sum of all the multiplies of 3 or 5');
    console.log('13) Sum of a sequence');
    console.log('14) Total amount of points');
    console.log('15) Vowel Count');
}

var questions = [];
questions[0] = "";
questions[1] = "Enter a word to mask it: ";
questions[2] = "Enter a number to start the 'Even or Odd' function: ";

functionMenu();

var info = {};
async.series([
    (callback) => {
        rl.question('Enter the number corresponding to the exercise you want to execute [1-15]: ', (userInput) => {
            info.exerciseNumber = userInput;
            callback();
        });
    },
    (callback) => {
        rl.question(questions[info.exerciseNumber - 1], (userInput) => {
            switch(info.exerciseNumber){
                case "1":
                    //info.functionResult = ;
                break;
                case "2":
                    info.functionResult = CreditCardMask.maskify(userInput);
                break;
                case "3":
                    info.functionResult = EvenOrOdd.even_or_odd(userInput);
                break;
                case "4":
                    //info.functionResult = ;
                break;
                case "5":
                    //info.functionResult = ;
                break;
                case "6":
                    //info.functionResult = ;
                break;
                case "7":
                    //info.functionResult = ;
                break;
                case "8":
                    //info.functionResult = ;
                break;
                case "9":
                    //info.functionResult = ;
                break;
                case "10":
                    //info.functionResult = ;
                break;
                case "11":
                    //info.functionResult = ;
                break;
                case "12":
                    //info.functionResult = ;
                break;
                case "13":
                    //info.functionResult = ;
                break;
                case "14":
                    //info.functionResult = ;
                break;
                case "15":
                    //info.functionResult = ;
                break;
            }
            
            callback();
        });
    }
], () => {
    console.log(info.functionResult);
    rl.close();
});