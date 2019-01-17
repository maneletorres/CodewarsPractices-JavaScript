const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solve(s){
    var sSplitted = s.split('');

    //var consonants = s.match(/[^aeiou]/g);
    var aux = [];
    for(let i = 0; i < sSplitted.length; i++){
        var letter = sSplitted[i];
        var letraAntes = sSplitted[i - 1];

        if(i == 0 && !letter.match(/[aeiou]/g)){
            aux.push(letter);
        } else {
            if(letter.match(/[aeiou]/g)){
                continue;
            } else {
                if(!letraAntes.match(/[aeiou]/g)){
                    aux[aux.length - 1] += letter;
                } else {
                    aux.push(letter);
                }
            }
        }
    }

    var count = 0;
    for(let i = 0; i < aux.length; i++){
        var element = aux[i]
        var x = 0;
        for(let j = 0; j < element.length; j++){
            var letter = element.charAt(j);
            x += letter.charCodeAt(0) - 96;
        }

        if(x >= count){
            count = x;
        }
    }

    return count;
}

rl.question('Question: ', (userInput) => {
    console.log(solve(userInput));
    rl.close();
});