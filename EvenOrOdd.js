const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function even_or_odd(number) {
  return number % 2 == 0 ? "Even" : "Odd";
}

rl.question('Enter a number to start the "Even or Odd" function: ', (userInput) => {
  console.log("The number " + userInput + " is: " + even_or_odd(userInput) + ".");
  rl.close();
});
