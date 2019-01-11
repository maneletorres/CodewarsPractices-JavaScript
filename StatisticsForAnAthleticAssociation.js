/**
 * 
 * @author Manuel Espinosa Torres
 * 
 * Codewars exercise: "Statistics for an Athletic Association"
 * 
 * Description:
 * You are the "computer expert" of a local Athletic Association (C.A.A.). Many * teams of runners come to compete. Each time you get a string of all race    * results of every team who has run. For example here is a string showing the * individual results of a team of 5 runners:
 * "01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"
 * 
 * Each part of the string is of the form: h|m|s where h, m, s (h for hour, m  * for minutes, s for seconds) are positive or null integer (represented as    * strings) with one or two digits. There are no traps in this format.
 * 
 * To compare the results of the teams you are asked for giving three          * statistics; range, average and median.
 * 
 * Your task is to return a string giving these 3 values. For the example given * above, the string result will be:
 * "Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"
 * 
 * of the form:
 * "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"
 * where hh, mm, ss are integers (represented by strings) with each 2 digits.
 * 
 * Remarks:
 * 1.- if a result in seconds is ab.xy... it will be given truncated as ab.
 * 2.- if the given string is "" you will return "".
 * 
 */
/*const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});*/

function stat(strg){
    if(strg.length == 0){
        return '';
    }

    var strgSplitted = strg.split(',');
    var min = 0;
    var max = 0;
    var average = 0;

    var timesArray = [];
    for(let i = 0; i < strgSplitted.length; i++){
        var aux = deformatFullTime(strgSplitted[i]);
        average += aux;
        timesArray[i] = aux;

        if(i == 0){
            min = aux;
            max = aux;
        } else {
            if(aux <= min){
                min = aux;
            }

            if(aux >= max){
                max = aux;
            }
        }
    }

    timesArray.sort((a,b) => a - b);

    var median = 0;
    if(timesArray.length % 2 != 0){
        median = timesArray[parseInt(timesArray.length / 2)];
    } else {
        median = (timesArray[parseInt(timesArray.length / 2 - 1 )] + timesArray[parseInt(timesArray.length / 2)]) / 2;
    }

    return "Range: " + formatFullTime(max - min) + " Average: " + formatFullTime(average / strgSplitted.length) + " Median: " + formatFullTime(median);
}

function deformatFullTime(time){
    var timeSplitted = time.split('|');

    var milliseconds = 0;
    var count = 3600;
    for(let i = 0; i < timeSplitted.length; i++){
        milliseconds += timeSplitted[i] * count;
        count /= 60;
    }

    return milliseconds;
}

function formatFullTime(milliseconds){
    var hours = parseInt(milliseconds / 3600);
    var minutes = parseInt((milliseconds % 3600) / 60);
    var seconds = parseInt(milliseconds % 60);
    
    return formatUnits(hours) + "|" + formatUnits(minutes) + "|" + formatUnits(seconds);
}

function formatUnits(units){
    return (units.toString().length < 2 ? "0" + units : units)
}

console.log("------ TIMES ------");
console.log("Time nº1: 01|15|59");
console.log("Time nº2: 1|47|6");
console.log("Time nº3: 01|17|20");
console.log("Time nº4: 1|32|34");
console.log("Time nº5: 2|3|17");
console.log(stat("01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"));

/*rl.question('Question: ', (userInput) => {
    console.log(stat("01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"));
    rl.close();
});*/