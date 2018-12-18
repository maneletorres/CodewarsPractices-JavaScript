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
