// define variables

var wins = 0;
var losses =0;
var tie = 0;

var options = ["R", "P", "S"];

// TODO: Prompt function to ask user to choose an option

var startGame = function (){
    var userChoice = prompt("Please enter R, P, S");
    if (!userChoice) {
        return;
    }
    

    // TODO: need to generate random computer variable
    var computerChoice = Math.floor(Math.random()*options.length);
    console.log(options[computerChoice]);
   alert("The computer chose " + options[computerChoice]);

    if (userChoice == computerChoice) {
        tie++;
        window.alert("YO!!!");
    } else if (userChoice == "P" && computerChoice == "R") {
        return wins++;
    } else if (userChoice == "R" && computerChoice == "P") {
        return losses++;
    } else if (userChoice == "R" && computerChoice == "S") {
        return wins++;
    } else if (userChoice == "S" && computerChoice == "R") {
        return losses++;
    } else if (userChoice == "S" && computerChoice == "P") {
        return wins++;
    } else if (userChoice == "P" && computerChoice == "S") {
        return losses++;
    }

    alert("Wins "  + wins + " Losses " + losses + " Tie " + tie);
}
// startGame();
        
        
    


// TODO: ALert user who wins


// TODO: create a way to keep score after every round (confirm?)

// TODO: Prompt user if they want to play again
