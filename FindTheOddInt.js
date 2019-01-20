/**
 * 
 * @author Manuel Espinosa Torres
 * 
 * Codewars exercise: "Find the odd int"
 * 
 * Description:
 * Given an array, find the int that appears an odd number of times.
 * 
 * There will always be only one integer that appears an odd number of times.
 * 
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findOdd(A) {
    var count = 0;
      for(let i = 0; i < A.length; i++){
        for(let j = 0; j < A.length; j++){
          if(A[i] == A[j]){
            count++;
          }
        }
        
        if(count % 2 != 0){
          return A[i];
        }
    }
}

var arrays = [[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], [1,1,2,-2,5,2,4,4,-1,-2,5], [20,1,1,2,2,3,3,5,5,4,20,4,5], [10], [1,1,1,1,1,1,10,1,1,1,1], [5,4,3,2,1,5,4,3,2,10,10]];

for(let i = 0; i < arrays.length; i++){
  console.log("Array " + (i + 1) + " --> [" + arrays[i] + "]");
}

rl.question('Select one of the listed arrays to find the number that appears an odd number of times in it [1-6]: ', (userInput) => {
  console.log("The number that appears odd times in the array " + userInput + " is: " + findOdd(arrays[userInput - 1]));
  rl.close();
});