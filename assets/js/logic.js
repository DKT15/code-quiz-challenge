//1. When Start quiz is clicked, the first question should be displayed and the timer should begin from 60 seconds.
//2. When the first question is answered correctly, make correct sound, increase score, display correct below and then move onto the next question.
//3. When the first question is answered incorrectly, make wrong sound, decrease score, subtract 10 secs from timer, display wrong below and then move onto the next question.
//4. Once all the questions have been answered and/or the timer reaches 0, the game should end and display the next page.
//5. That page should all the use to enter and submit their intials and then store it in the local storage, to then push to the highscores page.

// my global variables.
var score = 0;
var index = 0;
var secondsLeft = 60;

var game = document.querySelectorAll("body");
var timerEl = document.getElementById("time");
var gameStartEl = document.getElementById("start-screen");
var gameEndEl = document.getElementById("end-screen");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var questionTitle = document.getElementById("question-title");
var feedbackEl = document.getElementById("feedback");
var initialsEl = document.getElementById("initials");
var wrongAudio = new Audio("/assets/sfx/incorrect.wav");
var rightAudio = new Audio("/assets/sfx/correct.wav");

var generateBtn = document.querySelector("#start");
var submitBtn = document.getElementById("submit");

function startGame() {
  //timer needs to start
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);

  // hides the starter screen.
  gameStartEl.setAttribute("class", "hide");

  //removes the attribute that then allows for the questions to be dispalyed..
  questionsEl.removeAttribute("class");

  displayQuestion();
}

function displayQuestion() {
  //display questions
  questionTitle.textContent = questions[index].question;

  // for loop loops through the questions and the choices. In this scenario it does it three times for the qestions as there is only three and four times for choices as there are four choices.
  for (var j = 0; j < questions[index].choice.length; j++) {
    // a button is created and added to a btn choices variable.
    var btnChoices = document.createElement("button");

    // btn choices is given a class named choices.
    btnChoices.setAttribute("class", "choices");

    // value is set to each button for each question and the choices.
    btnChoices.setAttribute("value", questions[index].choice[j]);

    //the text content of the buttons is given four options depending on the question.
    btnChoices.textContent = questions[index].choice[j];

    // adds the choices buttons to the choices element
    choicesEl.appendChild(btnChoices);
  }
}

// This function is checking for the users answers.
function checkAnswer(event) {
  // Looking out for the event which is clicking one of the choices buttons.
  choicesEl = event.target;

  feedbackEl.removeAttribute("class"); // Will allow the feedback to be displayed on the screen.
  console.log(choicesEl.value);
  console.log(questions[index].answer);
  //checks to see if the user has picked the right answer.
  if (choicesEl.value !== questions[index].answer) {
    // takes away time if wrong
    secondsLeft -= 15;
    // takes away from score if wrong
    score--;

    //displays the new time once it has been taken away.
    timerEl.textContent = secondsLeft;

    // the incorrect audio is played.
    wrongAudio.play();

    // the feedback displays "wrong."
    feedbackEl.textContent = "wrong!";
  } else {
    // adds to the score if right.
    score++;

    // the correct audio is played.
    rightAudio.play();

    // the feedback displays "correct."
    feedbackEl.textContent = "Correct!";

    index++;
    displayQuestion();
  }

  // // this is meant to display the next question.
  // questions[index].question;

  // if there is no time left of the user has reached the end of the questions, then the game should be ended and the end screen will be displayed.
  if (secondsLeft <= 0 || questions[index].question === questions.length) {
    endGame();
  }
}

function endGame() {
  gameEndEl.removeAttribute("class");
}

function saveHighscore() {
  // this gets the intials that have been entered.
  var initials = initialsEl.value.trim();

  // this is checking to make sure the value is empty.
  if (initials !== "") {
    // the saved scores will be retrieved from the localstorage, but if there isn't any then it will be set to an empty array.
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    // This is a new score object for the user.
    var newScore = {
      score: score,
      initials: initials,
    };

    // The users score is pushed into highscores and then is being saved to the local storage.
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    // Sends the user to the next page.
    window.location.href = "highscores.html";
  }
}

// This allows the user to save their highscore.
submitBtn.addEventListener("click", saveHighscore);

// Executes when the start is clicked.
generateBtn.addEventListener("click", startGame);

//Executes and checks the answers
choicesEl.addEventListener("click", checkAnswer);
