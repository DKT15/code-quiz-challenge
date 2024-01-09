//1. When Start quiz is clicked, the first question should be displayed and the timer should begin from 60 seconds.
//2. When the first question is answered correctly, make correct sound, increase score, display correct below and then move onto the next question.
//3. When the first question is answered incorrectly, make wrong sound, decrease score, subtract 10 secs from timer, display wrong below and then move onto the next question.
//4. Once all the questions have been answered and/or the timer reaches 0, the game should end and display the next page.
//5. That page should all the use to enter and submit their intials and then store it in the local storage, to then push to the highscores page.

var score = 0;
var secondsLeft = 60;

var game = document.querySelectorAll("body");
var timerEl = document.getElementById("time");
var gameStartEl = document.getElementById("start-screen");
var gameEndEl = document.getElementById("end-screen");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");

var generateBtn = document.querySelector("#start");

function startGame() {
  //timer needs to start
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);

  gameStartEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");

  //display questions

  for (var i = 0; i < questions.length; i++) {
    console.log("In first for loop");
    // console.log(questions[i].question);
    questionsEl.textContent = questions[i].question;

    for (var a = 0; a < 4; a++) {
      console.log(questions[i].choice[a]);
      var btnChoices = document.createElement("button");
      btnChoices.setAttribute("value", questions[i].choice[a]);
      choicesEl.innerHTML = "Hello";
      // choicesEl.textContent = questions[i].choice[a];
    }
  }

  //first question needs to be displayed
  //   if (questions[i] === answer) {
  //     score++;
  //     var correctAudio = new Audio("correct.wav");
  //     correctAudio.play();
  //     document.write("Correct");
  //   } else {
  //     score--;
  //     var incorrectAudio = new Audio("incorrect.wav");
  //     incorrectAudio.play();
  //     document.write("incorrect");
  //     timerEl - 100;
  //   }

  //   //second question needs to be displayed
  //   if (questions[1] === choice3) {
  //     score++;
  //     var correctAudio = new Audio("correct.wav");
  //     correctAudio.play();
  //     document.write("Correct");
  //   } else {
  //     score--;
  //     var incorrectAudio = new Audio("incorrect.wav");
  //     incorrectAudio.play();
  //     document.write("incorrect");
  //     timerEl - 100;
  //   }

  //   //third question needs to be displayed
  //   if (questions[2] === choice4) {
  //     score++;
  //     var correctAudio = new Audio("correct.wav");
  //     correctAudio.play();
  //     document.write("Correct");
  //   } else {
  //     score--;
  //     var incorrectAudio = new Audio("incorrect.wav");
  //     incorrectAudio.play();
  //     document.write("incorrect");
  //     timerEl - 100;
  //   }
  // }

  // function endGame() {
  //   if (timerEl === 0) {
  //     gameEndEl;
  //   }
}

generateBtn.addEventListener("click", startGame);
