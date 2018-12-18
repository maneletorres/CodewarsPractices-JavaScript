const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printerError(s){
  let count = 0;
  for(var i = 0; i < s.length; i++){
    if(s.charCodeAt(i) < 97 || s.charCodeAt(i) > 109){
      count++;
    }
  }

  return count + "/" + s.length;
}


rl.question("Enter the series of letters: ", (userInput) => {
  console.log("error_printer(s) => \"" + printerError(userInput) + "\"");
  rl.close();
});
