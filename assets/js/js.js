$(document).ready(function openingScreen(){

	$(".questionBox").html("<strong>Take a quick quiz on Space!</strong>");
	var startButton = $(".ansBox").html("<a class='btn btn-primary btn-lg  start-button' role='button'> Blast Off! </a>");

	$("body").on("click" , ".start-button" , function(event){

		runGame();
		timer();

	});

	var questions = ["How old is our solar system?" , "What is average distance between the earth and the sun is equal to?", "Which planet contains Olympus Mons, the largest volcano of the solar system?" , "How many moons are in our Solar System?" ,"The hottest place in the universe is located in which constellation?",  "What is the coldest place in the universe?"];
	var qCount = 0;
	var options = [["2 Billion Years" , "3 Billion Years" , "5 Billion Years" , "10 Billion Years"],["One Light Year" , "One Astronomical Unit" , "One Parsec" , "One Knot"],["Earth" , "Mars" , "Jupiter" , "Saturn"],["67" , "204" , "123" , "183"] , ["Gemini", "Virgo" ,"Cancer" , "Sagittarius"] , ["Boomerang Nebula" , "Pipe Nebula" , "Pistol Nebula" , "Tarantula Nebula"]];
	var correctAns = ["C. 5 Billion Years" , "B. One Astronomical Unit" , "B. Mars" , "D. 183" ,"B. Virgo", "A. Boomerang Nebula"];
	var clock;

	var winCount = 0;
	var loseCount = 0;


	function runGame(){

		var questionBox = "<p class = 'text-center small'> Time Remaining: <span class = 'timer small'> 25</span></p> <br> <p class='text-center large'>" + questions[qCount] + "</p>";
		$(".questionBox").html(questionBox);

		var ansBox = "<p class 'text-center> <p class='first-answer answer'>A. " + options[qCount][0] + "</p><p class='answer'>B. "+options[qCount][1]+"</p><p class='answer'>C. "+options[qCount][2]+"</p><p class='answer'>D. "+options[qCount][3]+"</p>";
		$(".ansBox").html(ansBox);
	}

	$("body").on("click", ".answer", function(event){

		var chosenAns = $(this).text();

		if( chosenAns === correctAns[qCount]){

			win();
			winCount++;
			clearInterval(clock);
		}

		else{

			lose();
			loseCount++;
			clearInterval(clock);
		}
	});

	function win(){

		$(".questionBox").html("<br> <br> <br> You've chosen the right answer! On to the next question!");
		$(".ansBox").html("");
		setTimeout(gameContd, 3000);
	}

	function lose(){

		$(".questionBox").html("<br> <br> <br> <p> <span> You've chosen the wrong answer! On to the next question! </span> </p>");
		$(".questionBox").append("<p> <span> The right answer is: " + correctAns[qCount] + "</span> </p>");
		$(".ansBox").html("");
		setTimeout(gameContd, 3000);
	}

	function gameContd(){

		if (qCount < questions.length - 1){
			qCount ++;
			runGame();
			counter = 25;
			timer();
		}

		else{
			endGame();
		}
	}

	function timeLoss(){
		$(".ansBox").html("<p> <span> Time's Up! On to the next question! </span> </p>");
		$(".ansBox").append("<p> <span> The right answer is: " + correctAns[qCount] + "</span> </p>");
		setTimeout(gameContd, 3000);
	}

	function endGame(){

		$(".ansBox").html("");
		$(".questionBox").html("<br> <br> <br> <p> <span> Number of right answers: " + winCount + " </span> </p>");
		$(".questionBox").append("<p> <span> Number of wrong answers: " + loseCount + "</span> </p>");
		$(".questionBox").append("<p  class ='btn btn-primary btn-lg' id = 'again' role = 'button'> Try Again? </p>");

		$("body").on("click" , "#again" , function(event){

			reset();
		})
	}

	function reset(){
		var winCount = 0;
		var loseCount = 0;
		var qCount = 0;
		openingScreen();
		timer();

	}
// timer

var counter = 25;

function timer() {
	clock = setInterval(seconds, 1000);
	function seconds() {
		if (counter === 0) {
			clearInterval(clock);
			timeLoss();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}
});
