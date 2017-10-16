var wins= 0;
var losses= 0;
var totalScore = 0; // always reset at 0 for new game
$(".wincount").html(wins);
$(".losscount").html(losses);


function startGame () {

var goalNumber = Math.floor(Math.random() * 50 + 30); // set random goalNumber to 50
var fatNumber = Math.floor(Math.random()*9); // generate ranodom # from 1-10 for buttons
var lionNumber = Math.floor(Math.random()*15);
var whiteNumber = Math.floor(Math.random()*10);
var tigerNumber = Math.floor(Math.random()*15);


$("#goalNumber").html(goalNumber);
$("#currentNumber").html(totalScore);

$(".fatbutton").on("click", function() {
	totalScore = totalScore + fatNumber;
	$("#currentNumber").html(totalScore);
});

$(".lionbutton").on("click", function() {
	totalScore = totalScore + lionNumber;
	$("#currentNumber").html(totalScore);
});

$(".whitebutton").on("click", function() {
	totalScore += whiteNumber;
	$("#currentNumber").html(totalScore);
});

$(".tigerbutton").on("click", function() {
	totalScore += whiteNumber;
	$("#currentNumber").html(totalScore);
});

}

// Need to put below if statement outside of function to run function again.
// But then I won't be able to access the goalNumber variable.
if (goalNumber === totalScore) {
	alert("YOU WIN");
	wins++;
	setInterval(startGame, 3000); // restart game 3 seconds after alert goes off
}

else if (goalNumber > totalScore) {
	alert("YOU LOSE");
	losses++;
	setInterval(startGame, 3000); // restart game 3 seconds after alert goes off
}

startGame ();
