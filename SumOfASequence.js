/**
 * 
 * @author Manuel Espinosa Torres
 * 
 * Codewars exericse: "Sum of a sequence"
 * 
 * Description:
 * Your task is to make function, which returns the sum
 * of a sequence of integers.
 * 
 * The sequence is defined by 3 non-negative values: 
 * begin, end, step.
 * 
 * If begin value is greater than the end, function 
 * should returns 0.
 * 
 * Examples:
 * sequenceSum(2,2,2) === 2
 * sequenceSum(2,6,2) === 12 // 2 + 4 + 6
 * sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
 * sequenceSum(1,5,3) === 5 // 1 + 4
 * 
 */
const async = require('async');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sequenceSum(begin, end, step){
    var result = 0;

    for(let i = begin; i <= end; i += step){
        result += i;
    }

    return result;
}

var info = {};
async.series([
    (callback) => {
        rl.question('Enter the begin number: ', (beginNumber) => {
            info.one = beginNumber;
            callback();
        });
    },
    (callback) => {
        rl.question('Enter the end number: ', (endNumber) => {
            info.two = endNumber;
            callback();
        });
    },
    (callback) => {
        rl.question('Enter the step number: ', (stepNumber) => {
            info.three = stepNumber;
            callback();
        });
    }
], (err, results) => {
    console.log('The result of adding the introduced sequence is: ' + sequenceSum(parseInt(info.one), parseInt(info.two), parseInt(info.three)));
    rl.close();
});