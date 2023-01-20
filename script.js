// define variables

var wins = 0;
var losses =0;
var tie = 0;

var options = ["R", "P", "S"];



var startGame = function (){
    var userChoice = prompt("Please enter R, P, S");
    if (!userChoice) {
        return;
    }
    
userChoice = userChoice.toUpperCase();

    
    var randomIndex = Math.floor(Math.random()*options.length);
    var computerChoice = options[randomIndex]
    console.log(computerChoice);
   alert("The computer chose " + computerChoice);

    if (userChoice == computerChoice) {
        tie++;
      
    } else if (userChoice == "P" && computerChoice == "R") {
         wins++;
    } else if (userChoice == "R" && computerChoice == "P") {
         losses++;
    } else if (userChoice == "R" && computerChoice == "S") {
         wins++;
    } else if (userChoice == "S" && computerChoice == "R") {
         losses++;
    } else if (userChoice == "S" && computerChoice == "P") {
         wins++;
    } else if (userChoice == "P" && computerChoice == "S") {
        losses++;
    }

    alert("Wins "  + wins + " Losses " + losses + " Tie " + tie);
}
