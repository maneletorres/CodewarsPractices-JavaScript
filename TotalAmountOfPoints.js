/**
 *
 * @author Manuel Espinosa Torres
 * 
 * Codewars exercise: "Total amount of points"
 * 
 * Description:
 * Our football team finished the championship. The result 
 * of each match look like "x:y". Results of all matches 
 * are recorded in the array.
 * 
 * For example: ["3:1", "2:2", "0:1", ...]
 * 
 * Write a function that takes such list and counts the 
 * points of our team in the championship. Rules for 
 * counting points for each match:
 * 
 * if x>y - 3 points
 * if x<y - 0 point
 * if x=y - 1 point
 * 
 * Notes:
 * There are 10 matches in the championship.
 * 0 <= x <= 4
 * 0 <= y <= 4
 * 
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var teams = new Array(5);
teams[0] = ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"];
teams[1] = ["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"];
teams[2] = ["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"];
teams[3] = ["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"];
teams[4] = ["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"];

var teamNames = new Array(5);
teamNames[0] = 'Team 1';
teamNames[1] = 'Team 2';
teamNames[2] = 'Team 3';
teamNames[3] = 'Team 4';
teamNames[4] = 'Team 5';

function points(teamName, games){
    var points = 0;

    for(var i = 0; i < games.length; i++){
        var game = games[i];
        
        if(parseInt(game.charAt(0)) > parseInt(game.charAt(2))){
            points += 3;
        } else if(parseInt(game.charAt(0)) == parseInt(game.charAt(2))){
            points += 1;
        }
    }

    return "Total points achieved in the championship by the team " + teamName +": " + points + " points.";
}

rl.question('Select a team to calculate the points achieved in the championship [1-5]: ', (userInput) => {
    console.log(points(teamNames[userInput - 1], teams[userInput - 1]));
    rl.close();
});