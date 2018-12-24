/**
 * 
 * @author Manuel Espinosa Torres
 * 
 * Codewars exercise: "Multiplies of 3 or 5"
 * 
 * Description:
 * Finish the solution so that it returns the sum of all the multiples
 * of 3 or 5 below the number passed in.
 * 
 * Example:
 * If we list all the natural numbers below 10 that are multiples of 3
 * or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * 
 * Note:
 * If the number is a multiple of both 3 and 5, only count it once.
 * 
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function solution(number){
  var sum = 0;
  for(var i = 0; i < number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i;
    }
  }

  return sum;
}

rl.question('Enter a number to start the "Multiplies of 3 or 5" function: ', (userInput) => {
  console.log('The sum of the multiples of 3 and 5 between 0 and ' + userInput + ' is ' + solution(userInput) + '.');

  rl.close();
});
