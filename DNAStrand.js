/**
 * 
 * @author Manuel Espinosa Torres
 * 
 * Codewars exercise: "Complementary DNA"
 * 
 * Description:
 * Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and  * carries the "instructions" for the development and functioning of living    * organisms.
 *
 * If you want to know more http://en.wikipedia.org/wiki/DNA
 *
 * In DNA strings, symbols "A" and "T" are complements of each other, as "C"   * and "G". You have function with one side of the DNA (string, except for     * Haskell);  *you need to get the other complementary side. DNA strand is     * never empty or  *there is no DNA at all (again, except for Haskell).
 *
 * More similar exercise are found here                                         * http://rosalind.info/problems/list-view/ (source)
 * 
 * Examples:
 * DNAStrand ("ATTGC") # return "TAACG"
 * DNAStrand ("GTAT") # return "CATA"
 * 
 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function DNAStrand(dna){
    var result = "";
  
    for(let i = 0; i < dna.length; i++){
        switch(dna[i]){
        case "A":
        result += "T";
        break;
        case "T":
        result += "A";
        break;
        case "C":
        result += "G";
        break;
        case "G":
        result += "C";
        break;
        }
    }
    
    return result;
}

rl.question('Enter a DNA string: ', (userInput) => {
    console.log("The result of applying complementary DNA to the string '" + userInput + "' is: " + DNAStrand(userInput));
    rl.close();
});