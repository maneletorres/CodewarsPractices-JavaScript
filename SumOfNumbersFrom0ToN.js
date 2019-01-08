/**
 * 
 * @author Manuel Espinosa Torres
 * 
 * Codewars exercise: "Sum of numbers from 0 to N"
 * 
 * Description:
 * We want to generate a function that computes the series starting from 0 and  * ending until the given number following the sequence:
 * 0 1 3 6 10 15 21 28 36 45 55 ...
 * 
 * Which is created by:
 * 0, 0+1, 0+1+2, 0+1+2+3, 0+1+2+3+4, 0+1+2+3+4+5, 0+1+2+3+4+5+6, 0+1+2+3+4+5+6 * +7 etc...
 * 
 * Input: lastNumber
 * Output: series and result
 * 
 * Examples:
 * 6 -> 0+1+2+3+4+5+6=21
 * -15 -> -15<0
 * 0 -> 0=0
 * 
 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(number) {
      var result = "";
      let count = 0;
    
      if(number < 0){
        return number + "<0";
      } else if(number == 0){
        return "0=0";
      }
      
      for(let i = 0; i <= number; i++){
        if(i == number){
          result += i + " = ";
        } else {
          result += i + "+";
        }
        
        count += i;
      }
      
      return result + count;
    };
  
    return SequenceSum;
  })();

rl.question('Enter a number to make the addition from 0 to that number: ', (userInput) => {
    console.log("Result of adding from 0 to " + userInput + ": " + SequenceSum.showSequence(userInput));
    rl.close();
});